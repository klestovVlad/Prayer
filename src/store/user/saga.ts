import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';

import {signInQuery, signUpQuery} from './axios';
import {UserAction} from './slice';
import {SignInRequest, SignUpRequest} from './state';

function* signIn(action: PayloadAction<SignInRequest>) {
  const {data} = yield call(() => signInQuery(action.payload));
  if (Object.prototype.hasOwnProperty.call(data, 'message')) {
    yield put(UserAction.signError(data.message));
  } else {
    yield put(UserAction.signIn(data));
  }
}

function* signUp(action: PayloadAction<SignUpRequest>) {
  const {data} = yield call(() => signUpQuery(action.payload));
  if (Object.prototype.hasOwnProperty.call(data, 'message')) {
    yield put(UserAction.signError(data.message));
  }
  yield put(UserAction.signUp(data));
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
  yield takeLatest(UserAction.signUpRequest.type, signUp);
}
