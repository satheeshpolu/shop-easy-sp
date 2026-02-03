import axios, { AxiosError } from "axios";

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
};

export const normalizeApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;

    return {
      message:
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Unexpected error",
      status: axiosError.response?.status,
      code: axiosError.code,
    };
  }

  return {
    message: "Unknown error occurred",
  };
};
