import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {initialState} from './state';
import {SignIn, SignError, SignInRequest} from './state';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    signInRequest(state, {payload}: PayloadAction<SignInRequest>) {
      console.log(payload);
      state.loading = true;
      return state;
    },
    signIn(state, {payload}: PayloadAction<SignIn>) {
      return {...payload, loading: false};
    },
    singUpRequest(state, {payload}: PayloadAction<SignInRequest>) {
      state.loading = true;
      return state;
    },
    signUp(state, {payload}: PayloadAction<SignIn>) {
      return {...payload, loading: false};
    },
    signError(state, {payload}: PayloadAction<SignError>) {
      state.loading = false;
      if (
        payload.toString().includes('Could not find any entity of type "Users"')
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
