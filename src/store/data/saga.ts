import {columnsQuery} from './axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {stateAction} from './slice';

const token =
  'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3';

function* getColumns(action: any) {
  const {data} = yield call(() => columnsQuery(token));
  yield put(stateAction.getColumns(data));
  console.log(data);
}

export function* dataWatcher() {
  yield takeLatest(stateAction.columnRequest.type, getColumns);
}
