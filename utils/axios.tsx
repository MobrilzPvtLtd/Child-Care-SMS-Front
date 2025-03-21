import axios, { InternalAxiosRequestConfig } from "axios"; 

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    "Content-Type": "application/json",
  },
});

 

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
export { axiosInstance  };
