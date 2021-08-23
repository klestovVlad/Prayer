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
