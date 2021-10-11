import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getCommentsAction } from '../comments';
import { getPrayersAction } from '../prayers/actions';
import { ColumnsActionTypes } from './action-types';
import { getColumnsAction } from './actions';
import { addNewColumnPost, columnsQuery, deleteColumnPost } from './axios';
import { columnAction } from './slice';
import { AddNewColumn } from './state';

export function* initialState() {
  yield put(getColumnsAction());
  yield put(getPrayersAction());
  yield put(getCommentsAction());
}

export function* getColumns() {
  try {
    yield put(columnAction.setColumnsLoading(true));
    const { data } = yield call(() => columnsQuery());
    yield call([console, 'log'], 'columns:', data);
    yield put(columnAction.setColumns(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(columnAction.seColumnsError(e.message));
    }
  } finally {
    yield put(columnAction.setColumnsLoading(false));
  }
}

export function* deleteColumn(action: PayloadAction<number>) {
  try {
    yield put(columnAction.setColumnsLoading(true));
    const columnId = action.payload;
    yield call(() => deleteColumnPost(columnId));
    yield put(columnAction.deleteColumn(columnId));
  } catch (e) {
    if (e instanceof Error) {
      yield put(columnAction.seColumnsError(e.message));
    }
  } finally {
    yield put(columnAction.setColumnsLoading(false));
  }
}

export function* addNewColumn(action: PayloadAction<AddNewColumn>) {
  try {
    yield put(columnAction.setColumnsLoading(true));
    const { title } = action.payload;
    const { data } = yield call(() => addNewColumnPost(title));
    yield put(columnAction.addNewColumn(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(columnAction.seColumnsError(e.message));
    }
  } finally {
    yield put(columnAction.setColumnsLoading(false));
  }
}

export function* columnsWatcher() {
  yield takeLatest(ColumnsActionTypes.GET_INITIAL_STATE, initialState);
  yield takeLatest(ColumnsActionTypes.GET_COLUMNS, getColumns);
  yield takeLatest(ColumnsActionTypes.DELETE_COLUMN, deleteColumn);
  yield takeLatest(ColumnsActionTypes.ADD_NEW_COLUMN, addNewColumn);
}
