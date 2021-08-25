import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {initialState} from './state';

interface SignIn {
  email: string;
  id: number;
  name: string;
  token: string;
  loading: boolean;
}

interface SignError {
  message: string;
}

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    singInRequest(state) {
      state.loading = true;
      return state;
    },
    signIn(data, {payload}: PayloadAction<SignIn>) {
      return {...payload, loading: false};
    },
    singUpRequest() {},
    signUp(data, {payload}: PayloadAction<SignError>) {},
    signError(data, {payload}: PayloadAction<SignError>) {
      if (
        payload.toString().substr(0, 41) ===
        'Could not find any entity of type "Users"'
      ) {
        Alert.alert(
          'The username or password that you have entered is invalid.',
        );
      } else {
        Alert.alert(payload.toString());
      }
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
