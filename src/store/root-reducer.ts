import {combineReducers} from 'redux';
import UserReduser from './user/slice';
import DataReduser from './data/slice';
import createSagaMiddleware from '@redux-saga/core';
import {userWatcher} from './user/saga';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  UserReduser: UserReduser,
  DataReduser: DataReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userWatcher);
