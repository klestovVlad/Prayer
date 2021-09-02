import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';

import {addNewCommentRequest} from './action-types';
import {commentsQuery, deleteCommentPost, newCommentPost} from './axios';
import {commentsAction} from './slice';

function* getComments() {
  const {data} = yield call(() => commentsQuery());
  yield put(commentsAction.setComments(data));
}

function* addNewComment(action: PayloadAction<addNewCommentRequest>) {
  const {title, prayerId} = action.payload;
  const {data} = yield call(() => newCommentPost(prayerId, title));
  data.prayerId = prayerId;
  yield put(commentsAction.addNewComment(data));
}

function* deleteComment(action: PayloadAction<number>) {
  const commentId = action.payload;
  yield call(() => deleteCommentPost(commentId));
  yield put(commentsAction.deleteComment(commentId));
}

export function* commentsWatcher() {
  yield takeLatest(commentsAction.commentRequest.type, getComments);
  yield takeLatest(commentsAction.addNewCommentRequest.type, addNewComment);
  yield takeLatest(commentsAction.deleteCommentRequest.type, deleteComment);
}
