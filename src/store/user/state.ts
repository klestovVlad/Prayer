export interface UserData {
  email: string;
  id: number;
  name: string;
  token: string;
  loading: boolean;
}

export const initialState: UserData = {
  email: '',
  id: 0,
  name: '',
  token: '',
  loading: false,
};

export interface SignIn {
  email: string;
  id: number;
  name: string;
  token: string;
  loading: boolean;
}

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
