import {
  columnsQuery,
  prayersQuery,
  prayerPost,
  newPrayerPost,
  commentsQuery,
} from './axios';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import {stateAction} from './slice';
import {Pray} from './state';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddNewPrayerRequest} from './action-types';

function* getColumns() {
  const {data} = yield call(() => columnsQuery());
  yield put(stateAction.getColumns(data));

  const prayers = yield call(() => prayersQuery());
  const prayersData = prayers.data;
  yield put(stateAction.getPrayers({prayersData}));

  const comments = yield call(() => commentsQuery());
  const commentsData = comments.data;
  yield put(stateAction.getComments({commentsData}));
}

function* putPrayerChagne(action: PayloadAction<Pray>) {
  const {id, title, checked} = action.payload;
  const {data} = yield call(() => prayerPost(id, title, checked));
  yield put(stateAction.getSinglePrayer({data}));
}

function* addNewPrayer(action: PayloadAction<AddNewPrayerRequest>) {
  const {title, columnId} = action.payload;
  const {data} = yield call(() => newPrayerPost(columnId, title));
  yield put(stateAction.addNewPrayer({data}));
}

export function* dataWatcher() {
  yield takeLatest(stateAction.columnRequest.type, getColumns);
  yield takeLatest(stateAction.changePraуerRequest.type, putPrayerChagne);
  yield takeLatest(stateAction.addNewPrayerRequest.type, addNewPrayer);
}
