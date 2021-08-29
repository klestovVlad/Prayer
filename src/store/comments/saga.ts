import {commentsQuery, newCommentPost} from './axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {commentsAction} from './slice';
import {addNewCommentRequest} from './action-types';
import {PayloadAction} from '@reduxjs/toolkit';

function* getComments() {
  const {data} = yield call(() => commentsQuery());
  yield put(commentsAction.getComments(data));
}

function* addNewComment(action: PayloadAction<addNewCommentRequest>) {
  const {title, prayerId} = action.payload;
  const {data} = yield call(() => newCommentPost(prayerId, title));
  data.prayerId = prayerId;
  yield put(commentsAction.addNewComment(data));
}

export function* commentsWatcher() {
  yield takeLatest(commentsAction.commentRequest.type, getComments);
  yield takeLatest(commentsAction.addNewCommentRequest.type, addNewComment);
}
