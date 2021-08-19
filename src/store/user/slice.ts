import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userState = {
  email: '',
  password: '',
};

interface SignIn {
  email: string;
  password: string;
}

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: userState,
  reducers: {
    singInRequest() {
      console.log('singInRequest');
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
