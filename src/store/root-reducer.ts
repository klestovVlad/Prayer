import {combineReducers} from 'redux';
import userReducer from './user/slice';
import columnsReducer from './columns/slice';
import prayersReducer from './prayers/slice';
import createSagaMiddleware from '@redux-saga/core';
import {userWatcher} from './user/saga';
import {columnsWatcher} from './columns/saga';
import {prayersWatcher} from './prayers/saga';
import {configureStore} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer: userReducer,
  columnsReducer: columnsReducer,
  prayersReducer: prayersReducer,
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
  yield all([userWatcher(), columnsWatcher(), prayersWatcher()]);
}

sagaMiddleware.run(rootWatcher);
export default {
  store,
  persistor,
};
