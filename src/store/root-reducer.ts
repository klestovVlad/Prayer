import {combineReducers} from 'redux';
import UserReduser from './user/slice';
import DataReducer from './data/slice';
import createSagaMiddleware from '@redux-saga/core';
import {userWatcher} from './user/saga';
import {dataWatcher} from './data/saga';
import {configureStore} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  UserReduser: UserReduser,
  DataReducer: DataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function* rootWatcher() {
  yield all([userWatcher(), dataWatcher()]);
}

sagaMiddleware.run(rootWatcher);
