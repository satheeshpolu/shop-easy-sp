import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { env } from '@/app/config';

const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: env.API_BASE_URL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Attach auth token if available
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      // Handle common errors globally
      if (error.response?.status === 401) {
        // Handle unauthorized
        localStorage.removeItem('auth_token');
        // Optionally redirect to login
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const httpClient = createHttpClient();

// Type-safe request methods
export const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    httpClient.get<T, T>(url, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.post<T, T>(url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.put<T, T>(url, data, config),
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.patch<T, T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    httpClient.delete<T, T>(url, config),
};
