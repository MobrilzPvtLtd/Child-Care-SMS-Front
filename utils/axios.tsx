import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      // Redirect to login page when unauthorized
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

// Optional: Add response interceptor for handling errors (e.g., 401 Unauthorized)

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized (e.g., redirect to login)
//       if (typeof window !== "undefined") {
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// Export both Axios instances
export { axiosInstance };
