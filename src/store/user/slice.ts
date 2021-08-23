import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {initialState} from './state';

interface SignIn {
  email: string;
  id: number;
  name: string;
  token: string;
}

interface SignError {
  message: string;
}

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    singInRequest() {
      console.log('singInRequest');
    },
    signIn(data, {payload}: PayloadAction<SignIn>) {
      console.log('data: ', payload);
      return payload;
    },
    singUpRequest() {
      console.log('singInRequest');
    },
    signUp(data, {payload}: PayloadAction<SignError>) {
      console.log('data: ', payload);
    },
    signError(data, {payload}: PayloadAction<SignError>) {
      console.log(payload);
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
