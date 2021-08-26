import {combineReducers} from 'redux';
import UserReduser from './user/slice';
import DataReducer from './data/slice';
import createSagaMiddleware from '@redux-saga/core';
import {userWatcher} from './user/saga';
import {dataWatcher} from './data/saga';
import {configureStore} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  UserReduser: UserReduser,
  DataReducer: DataReducer,
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
  yield all([userWatcher(), dataWatcher()]);
}

sagaMiddleware.run(rootWatcher);
export default {
  store,
  persistor,
};
