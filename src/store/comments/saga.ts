import {commentsQuery} from './axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {commentsAction} from './slice';
// import {PayloadAction} from '@reduxjs/toolkit';

function* getComments() {
  const {data} = yield call(() => commentsQuery());
  yield put(commentsAction.getComments(data));
}

export function* commentsWatcher() {
  yield takeLatest(commentsAction.commentRequest.type, getComments);
}
