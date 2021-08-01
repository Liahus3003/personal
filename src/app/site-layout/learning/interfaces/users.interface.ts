export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: UserSupport;
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserSupport {
  url: string;
  text: string;
}
