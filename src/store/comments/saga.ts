import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { CommentsActionTypes } from './action-types';
import { commentsQuery, deleteCommentPost, newCommentPost } from './axios';
import { commentsAction } from './slice';
import { addNewCommentRequest } from './state';

function* getComments() {
  try {
    yield put(commentsAction.setCommentsLoading(true));

    const { data } = yield call(() => commentsQuery());
    yield put(commentsAction.setComments(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(commentsAction.setCommentsError(e.message));
    }
  } finally {
    yield put(commentsAction.setCommentsLoading(false));
  }
}

function* addNewComment(action: PayloadAction<addNewCommentRequest>) {
  try {
    yield put(commentsAction.setCommentsLoading(true));

    const { title, prayerId } = action.payload;
    const { data } = yield call(() => newCommentPost(prayerId, title));
    data.prayerId = prayerId;
    yield put(commentsAction.addNewComment(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(commentsAction.setCommentsError(e.message));
    }
  } finally {
    yield put(commentsAction.setCommentsLoading(false));
  }
}

function* deleteComment(action: PayloadAction<number>) {
  try {
    yield put(commentsAction.setCommentsLoading(true));

    const commentId = action.payload;
    yield call(() => deleteCommentPost(commentId));
    yield put(commentsAction.deleteComment(commentId));
  } catch (e) {
    if (e instanceof Error) {
      yield put(commentsAction.setCommentsError(e.message));
    }
  } finally {
    yield put(commentsAction.setCommentsLoading(false));
  }
}

export function* commentsWatcher() {
  yield takeLatest(CommentsActionTypes.GET_COMMENTS, getComments);
  yield takeLatest(CommentsActionTypes.ADD_NEW_COMMENT, addNewComment);
  yield takeLatest(CommentsActionTypes.DELETE_COMMENTS, deleteComment);
}
