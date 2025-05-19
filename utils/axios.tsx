import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Interface for our queue items
interface QueueItem {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}

// Create an instance of axios with baseURL and default headers
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies
});

// Flag to prevent infinite refresh loops
let isRefreshing: boolean = false;
// Store failed requests to retry them after token refresh
let failedQueue: QueueItem[] = [];

// Function to process the failed queue - either retry or reject based on refresh success
const processQueue = (error: AxiosError | null, token: string | null = null): void => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

// Add a custom property to the AxiosRequestConfig type
declare module 'axios' {
  interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

// Response interceptor to handle 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError): Promise<unknown> => { 
    if (!error.config) {
      return Promise.reject(error);
    }
    
    const originalRequest: AxiosRequestConfig = error.config;
    
    // If the error is 401 and we haven't already tried to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Mark this request as retried to prevent infinite loops
      originalRequest._retry = true;
      
      // If we're not already refreshing the token
      if (!isRefreshing) {
        isRefreshing = true;
        
        try {
          // Call the refresh token endpoint
          await axiosInstance.post("/auth/refresh-token", {}, { 
            withCredentials: true 
          });
          
          // If refresh successful, process queue with success
          processQueue(null);
          isRefreshing = false;
          
          // Retry the original request with new token (which is now in cookies)
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // If refresh fails, process queue with error
          processQueue(refreshError as AxiosError);
          isRefreshing = false;

          // Check if refresh error is 401 or 403, then redirect to login
          const status = (refreshError as AxiosError)?.response?.status;
          if (status === 401 || status === 403) {
            window.location.href = "/login"; // Redirect to login page
          }

          return Promise.reject(error);
        }
      } else {
        // If we're already refreshing, add this request to the queue
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            // When the token is refreshed, retry the request
            return axiosInstance(originalRequest);
          })
          .catch((err: unknown) => {
            return Promise.reject(err);
          });
      }
    }
    
    // For other errors, just reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;