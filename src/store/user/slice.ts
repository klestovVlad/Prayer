import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

import { initialState, UserData } from './state';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    signIn(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, loading: false };
    },
    signUp(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, loading: false };
    },
    setUserError(state, { payload }: PayloadAction<string>) {
      if (payload.includes('Could not find any entity of type "Users"')) {
        Alert.alert('The username or password that you have entered is invalid.');
      } else {
        Alert.alert(payload.toString());
      }
      state.errors.push(payload);
      state.isError = true;
    },
    logout(state) {
      state.token = '';
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
