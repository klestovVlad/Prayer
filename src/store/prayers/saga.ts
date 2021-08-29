import {
  prayersQuery,
  prayerPost,
  newPrayerPost,
  deletePrayerPost,
} from './axios';

import {put, call, takeLatest} from 'redux-saga/effects';
import {prayerAction} from './slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddNewPrayerRequest} from './action-types';
import {Prayer} from './state';

function* getPrayers() {
  const {data} = yield call(() => prayersQuery());
  yield put(prayerAction.getPrayers(data));
}

function* putPrayerChagne(action: PayloadAction<Prayer>) {
  const {id, title, checked} = action.payload;
  const {data} = yield call(() => prayerPost(id, title, checked));
  yield put(prayerAction.getSinglePrayer({data}));
}

function* addNewPrayer(action: PayloadAction<AddNewPrayerRequest>) {
  const {title, columnId} = action.payload;
  const {data} = yield call(() => newPrayerPost(columnId, title));
  yield put(prayerAction.addNewPrayer({data}));
}

function* deletePrayer(action: PayloadAction<number>) {
  const prayerId = action.payload;
  const {data} = yield call(() => deletePrayerPost(prayerId));
  console.log(data);
  yield put(prayerAction.deletePrayer(prayerId));
}

export function* prayersWatcher() {
  yield takeLatest(prayerAction.prayersRequest.type, getPrayers);
  yield takeLatest(prayerAction.changePraуerRequest.type, putPrayerChagne);
  yield takeLatest(prayerAction.addNewPrayerRequest.type, addNewPrayer);
  yield takeLatest(prayerAction.deletePrayerRequest.type, deletePrayer);
}
