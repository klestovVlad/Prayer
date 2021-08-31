import {combineReducers} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './user/slice';
import columnsReducer from './columns/slice';
import prayersReducer from './prayers/slice';
import commentsReducer from './comments/slice';

import {userWatcher} from './user/saga';
import {columnsWatcher} from './columns/saga';
import {prayersWatcher} from './prayers/saga';
import {commentsWatcher} from './comments/saga';

import {usersApi} from './user/rtk-query';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer: userReducer,
  columnsReducer: columnsReducer,
  prayersReducer: prayersReducer,
  commentsReducer: commentsReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);

function* rootWatcher() {
  yield all([
    userWatcher(),
    columnsWatcher(),
    prayersWatcher(),
    commentsWatcher(),
  ]);
}

sagaMiddleware.run(rootWatcher);
export default {
  store,
  persistor,
};
