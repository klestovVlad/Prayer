import {columnsQuery, prayersQuery, prayerPost, newPrayerPost} from './axios';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import {stateAction} from './slice';
import {selectStoreData} from './selectors';
import {Columns, Pray} from './state';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddNewPrayerRequest} from './action-types';

function* getColumns(action: any) {
  const {data} = yield call(() => columnsQuery());
  yield put(stateAction.getColumns(data));
  const prayers = yield call(() => prayersQuery());
  const prayersData = prayers.data;
  yield put(stateAction.getPrayers({data, prayersData}));
}

function* getPrayers(action: any) {
  const store: Columns[] = yield select(selectStoreData);
  const {data} = yield call(() => prayersQuery());
  yield put(stateAction.getPrayers({data, store}));
}

function* putPrayerChagne(action: PayloadAction<Pray>) {
  const {id, title, checked} = action.payload;
  const {data} = yield call(() => prayerPost(id, title));
  const store: Columns[] = yield select(selectStoreData);
  yield put(stateAction.getSinglePrayer({data, store}));
}

function* addNewPrayer(action: PayloadAction<AddNewPrayerRequest>) {
  const {title, columnId} = action.payload;
  console.log('addNewPrayer', action);
  const {data} = yield call(() => newPrayerPost(columnId, title));
  const store: Columns[] = yield select(selectStoreData);
  yield put(stateAction.addNewPrayer({data, store}));
  console.log(data);
}

export function* dataWatcher() {
  yield takeLatest(stateAction.columnRequest.type, getColumns);
  yield takeLatest(stateAction.prayersRequest.type, getPrayers);
  yield takeLatest(stateAction.changePraуerRequest.type, putPrayerChagne);
  yield takeLatest(stateAction.addNewPrayerRequest.type, addNewPrayer);
}
