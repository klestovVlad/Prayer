import { createAction } from '@reduxjs/toolkit';

import { UserActionTypes } from './action-types';
import { SignInRequest, SignUpRequest } from './state';

export const signInAction = createAction<SignInRequest>(UserActionTypes.SIGN_IN);

export const signUpAction = createAction<SignUpRequest>(UserActionTypes.SIGN_UP);
