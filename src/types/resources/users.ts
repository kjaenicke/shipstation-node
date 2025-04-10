export interface ListUsersOptions {
  /** Determines whether or not inactive users will be returned in the response. */
  showInactive?: boolean;
}

export interface ListUsersResponseItem {
  userId: string;
  userName: string;
  name: string;
}

export type ListUsersResponse = Array<ListUsersResponseItem>;
