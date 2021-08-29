// import {
//   columnsQuery,
//   prayersQuery,
//   prayerPost,
//   newPrayerPost,
//   commentsQuery,
//   deleteColumnPost,
//   addNewColumnPost,
//   deletePrayerPost,
// } from './axios';
// import {put, takeLatest, call} from 'redux-saga/effects';
// import {stateAction} from './slice';
// import {PayloadAction} from '@reduxjs/toolkit';
// import {AddNewPrayerRequest, AddNewColumn} from './action-types';

// function* getColumns() {
//   const {data} = yield call(() => columnsQuery());
//   yield call([console, 'log'], 'columns:', data);
//   yield put(stateAction.getColumns(data));

//   const prayers = yield call(() => prayersQuery());
//   const prayersData = prayers.data;
//   yield put(stateAction.getPrayers({prayersData}));

//   const comments = yield call(() => commentsQuery());
//   const commentsData = comments.data;
//   yield put(stateAction.getComments({commentsData}));
// }

// function* putPrayerChagne(action: PayloadAction<Pray>) {
//   const {id, title, checked} = action.payload;
//   const {data} = yield call(() => prayerPost(id, title, checked));
//   yield put(stateAction.getSinglePrayer({data}));
// }

// function* addNewPrayer(action: PayloadAction<AddNewPrayerRequest>) {
//   const {title, columnId} = action.payload;
//   const {data} = yield call(() => newPrayerPost(columnId, title));
//   yield put(stateAction.addNewPrayer({data}));
// }

// function* deleteColumn(action: PayloadAction<number>) {
//   const columnId = action.payload;
//   yield call(() => deleteColumnPost(columnId));
//   yield put(stateAction.deleteColumn(columnId));
// }

// function* addNewColumn(action: PayloadAction<AddNewColumn>) {
//   const {title} = action.payload;
//   const {data} = yield call(() => addNewColumnPost(title));
//   yield put(stateAction.addNewColumn(data));
// }

// function* deletePrayer(action: PayloadAction<number>) {
//   const prayerId = action.payload;
//   const {data} = yield call(() => deletePrayerPost(prayerId));
//   console.log(data);
//   yield put(stateAction.deletePrayer(prayerId));
// }

// export function* dataWatcher() {
//   yield takeLatest(stateAction.columnRequest.type, getColumns);
//   yield takeLatest(stateAction.changePraуerRequest.type, putPrayerChagne);
//   yield takeLatest(stateAction.addNewPrayerRequest.type, addNewPrayer);
//   yield takeLatest(stateAction.deleteColumnRequest.type, deleteColumn);
//   yield takeLatest(stateAction.addNewColumnRequser.type, addNewColumn);
//   yield takeLatest(stateAction.deletePrayerRequest.type, deletePrayer);
// }
