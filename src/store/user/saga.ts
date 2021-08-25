import {signInQuery, signUpQuery} from './axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {UserAction} from './slice';

const UserData = {
  email: 'strqwing',
  password: 'strinasdg',
};

function* signIn(action: any) {
  const {data} = yield call(() => signInQuery(action.payload));
  console.log('dataSignIn', data);
  if (data.hasOwnProperty('message')) {
    yield put(UserAction.signError(data.message));
  } else {
    yield put(UserAction.signIn(data));
  }
}

function* signUp() {
  const {data} = yield call(() => signUpQuery(UserData));
  if (data.hasOwnProperty('message')) {
    yield put(UserAction.signError(data.message));
  }
  yield put(UserAction.signUp(data));
}

export function* userWatcher() {
  yield takeLatest(UserAction.singInRequest.type, signIn);
  yield takeLatest(UserAction.singUpRequest.type, signUp);
}
