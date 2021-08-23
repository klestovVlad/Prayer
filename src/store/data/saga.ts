import {columnsQuery, prayersQuery} from './axios';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import {stateAction} from './slice';
import {selectStoreData} from './selectors';
import {Columns} from './state';

function* getColumns(action: any) {
  const {data} = yield call(() => columnsQuery(action.payload));
  yield put(stateAction.getColumns(data));
}

function* getPrayers(action: any) {
  const state: Columns[] = yield select(selectStoreData);
  const {data} = yield call(() => prayersQuery(action.payload));
  yield put(stateAction.getPrayers({data, state}));
}

export function* dataWatcher() {
  yield takeLatest(stateAction.columnRequest.type, getColumns);
  yield takeLatest(stateAction.prayersRequest.type, getPrayers);
}
