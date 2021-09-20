import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { commentsAction } from '../comments/slice';
import { prayerAction } from '../prayers/slice';
import { AddNewColumn } from './action-types';
import { addNewColumnPost, columnsQuery, deleteColumnPost } from './axios';
import { columnAction } from './slice';

export function* initialState() {
  yield put(columnAction.columnRequest());
  yield put(prayerAction.prayersRequest());
  yield put(commentsAction.commentRequest());
}

export function* getColumns() {
  const { data } = yield call(() => columnsQuery());
  yield call([console, 'log'], 'columns:', data);
  yield put(columnAction.setColumns(data));
}

export function* deleteColumn(action: PayloadAction<number>) {
  const columnId = action.payload;
  yield call(() => deleteColumnPost(columnId));
  yield put(columnAction.deleteColumn(columnId));
}

export function* addNewColumn(action: PayloadAction<AddNewColumn>) {
  const { title } = action.payload;
  const { data } = yield call(() => addNewColumnPost(title));
  yield put(columnAction.addNewColumn(data));
}

export function* columnsWatcher() {
  yield takeLatest(columnAction.initialStateRequest.type, initialState);
  yield takeLatest(columnAction.columnRequest.type, getColumns);
  yield takeLatest(columnAction.deleteColumnRequest.type, deleteColumn);
  yield takeLatest(columnAction.addNewColumnRequest.type, addNewColumn);
}
