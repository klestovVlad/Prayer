import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { all } from 'redux-saga/effects';

import { columnsWatcher } from './columns/saga';
import columnsReducer from './columns/slice';
import { commentsWatcher } from './comments/saga';
import commentsReducer from './comments/slice';
import { prayersWatcher } from './prayers/saga';
import prayersReducer from './prayers/slice';
import { usersApi } from './user/rtk-query';
import { userWatcher } from './user/saga';
import userReducer from './user/slice';

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
