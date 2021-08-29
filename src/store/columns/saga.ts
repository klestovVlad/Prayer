import {columnsQuery, deleteColumnPost, addNewColumnPost} from './axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {columnAction} from './slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddNewColumn} from './action-types';

export function* getColumns() {
  const {data} = yield call(() => columnsQuery());
  yield call([console, 'log'], 'columns:', data);
  yield put(columnAction.getColumns(data));
}

export function* deleteColumn(action: PayloadAction<number>) {
  const columnId = action.payload;
  yield call(() => deleteColumnPost(columnId));
  yield put(columnAction.deleteColumn(columnId));
}

export function* addNewColumn(action: PayloadAction<AddNewColumn>) {
  const {title} = action.payload;
  const {data} = yield call(() => addNewColumnPost(title));
  yield put(columnAction.addNewColumn(data));
}

export function* columnsWatcher() {
  yield takeLatest(columnAction.columnRequest.type, getColumns);
  yield takeLatest(columnAction.deleteColumnRequest.type, deleteColumn);
  yield takeLatest(columnAction.addNewColumnRequser.type, addNewColumn);
}
