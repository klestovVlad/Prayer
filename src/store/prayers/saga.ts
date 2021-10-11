import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { PrayersActionTypes } from './action-types';
import { deletePrayerPost, newPrayerPost, prayerPost, prayersQuery } from './axios';
import { prayerAction } from './slice';
import { AddNewPrayerRequest, Prayer } from './state';

function* getPrayers() {
  try {
    yield put(prayerAction.setPrayersLoading(true));
    const { data } = yield call(() => prayersQuery());
    yield put(prayerAction.setPrayers(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(prayerAction.setPrayersError(e.message));
    }
  } finally {
    yield put(prayerAction.setPrayersLoading(false));
  }
}

function* putPrayerChange(action: PayloadAction<Prayer>) {
  try {
    yield put(prayerAction.setPrayersLoading(true));

    const { id, title, checked } = action.payload;
    const { data } = yield call(() => prayerPost(id, title, checked));
    yield put(prayerAction.getSinglePrayer({ data }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(prayerAction.setPrayersError(e.message));
    }
  } finally {
    yield put(prayerAction.setPrayersLoading(false));
  }
}

function* addNewPrayer(action: PayloadAction<AddNewPrayerRequest>) {
  try {
    yield put(prayerAction.setPrayersLoading(true));

    const { title, columnId } = action.payload;
    const { data } = yield call(() => newPrayerPost(columnId, title));
    yield put(prayerAction.addNewPrayer({ data }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(prayerAction.setPrayersError(e.message));
    }
  } finally {
    yield put(prayerAction.setPrayersLoading(false));
  }
}

function* deletePrayer(action: PayloadAction<number>) {
  try {
    yield put(prayerAction.setPrayersLoading(true));

    const prayerId = action.payload;
    yield call(() => deletePrayerPost(prayerId));
    yield put(prayerAction.deletePrayer(prayerId));
  } catch (e) {
    if (e instanceof Error) {
      yield put(prayerAction.setPrayersError(e.message));
    }
  } finally {
    yield put(prayerAction.setPrayersLoading(false));
  }
}

export function* prayersWatcher() {
  yield takeLatest(PrayersActionTypes.GET_PRAYERS, getPrayers);
  yield takeLatest(PrayersActionTypes.CHANGE_PRAYER, putPrayerChange);
  yield takeLatest(PrayersActionTypes.ADD_NEW_PRAYER, addNewPrayer);
  yield takeLatest(PrayersActionTypes.DELETE_PRAYER, deletePrayer);
}
