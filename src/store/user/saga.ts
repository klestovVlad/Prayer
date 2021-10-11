import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { UserActionTypes } from './action-types';
import { signInQuery, signUpQuery } from './axios';
import { UserAction } from './slice';
import { SignInRequest, SignUpRequest } from './state';

function* signIn(action: PayloadAction<SignInRequest>) {
  try {
    yield put(UserAction.setUserLoading(true));
    const { data } = yield call(() => signInQuery(action.payload));
    yield put(UserAction.signIn(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(UserAction.setUserError(e.message));
    }
  } finally {
    yield put(UserAction.setUserLoading(false));
  }
}

function* signUp(action: PayloadAction<SignUpRequest>) {
  try {
    yield put(UserAction.setUserLoading(true));
    const { data } = yield call(() => signUpQuery(action.payload));
    yield put(UserAction.signUp(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(UserAction.setUserError(e.message));
    }
  } finally {
    yield put(UserAction.setUserLoading(false));
  }
}

export function* userWatcher() {
  yield takeLatest(UserActionTypes.SIGN_IN, signIn);
  yield takeLatest(UserActionTypes.SIGN_UP, signUp);
}
