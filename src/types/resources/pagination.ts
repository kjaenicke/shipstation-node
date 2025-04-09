export interface PaginatedRequest {
  /** Page number. */
  page?: number;
  /** Page size. */
  pageSize?: number;
  /** Sets the direction of the sort order. */
  sortDir?: 'ASC' | 'DESC';
}

export interface PaginatedResponse {
  total: number;
  pages: number;
  page: number;
}
