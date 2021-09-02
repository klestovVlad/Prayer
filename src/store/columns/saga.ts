import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';

import {AddNewColumn} from './action-types';
import {addNewColumnPost, columnsQuery, deleteColumnPost} from './axios';
import {columnAction} from './slice';

export function* getColumns() {
  const {data} = yield call(() => columnsQuery());
  yield call([console, 'log'], 'columns:', data);
  yield put(columnAction.setColumns(data));
}

export function* deleteColumn(action: PayloadAction<numberr>) {
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
