import { httpClient } from "./client";
import { normalizeApiError } from "./errors";

export const setupInterceptors = () => {
  httpClient.interceptors.request.use(
    (config) => {
      // attach auth token here if needed
      return config;
    },
    (error) => Promise.reject(error)
  );

  httpClient.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(normalizeApiError(error))
  );
};
