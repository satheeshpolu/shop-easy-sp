// Shared API types

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  skip?: number;
}
