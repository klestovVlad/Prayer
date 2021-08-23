export interface UserData {
  email: string;
  id: number;
  name: string;
  token: string;
}

export const initialState: UserData = {
  email: '',
  id: 0,
  name: '',
  token: '',
};
