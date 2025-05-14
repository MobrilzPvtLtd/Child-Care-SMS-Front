import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Flag to track if a token refresh is in progress
let isRefreshing = false;

// Queue of requests that failed due to 401
let failedQueue: any[] = [];

// Process the queue of failed requests
const processQueue = (error: any = null) => {
  // Resolve or reject all queued requests based on refresh outcome
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  // Reset the queue
  failedQueue = [];
};

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    // Check if the error is 401 (unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Mark this request as retried to prevent infinite loops
      originalRequest._retry = true;

      // If refresh is already in progress, queue this request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            // Retry the original request after token refresh
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      // Set refreshing flag
      isRefreshing = true;

      try {
        // Call the refresh token API endpoint
        await axiosInstance.post("/refresh-token");

        // If successful, process queue and retry original request
        processQueue();
        isRefreshing = false;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh fails, process queue with error and redirect
        processQueue(refreshError);
        isRefreshing = false;

        // Redirect to login page when refresh token fails
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // For other error statuses, just reject with the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
export { axiosInstance };
