export interface UserData {
  email: string;
  id: number;
  name: string;
  token: string;
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}

export const initialState: UserData = {
  email: '',
  id: 0,
  name: '',
  token: '',
  isError: false,
  isLoading: false,
  errors: [],
};

export interface SignError {
  message: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  name: string;
  password: string;
}
