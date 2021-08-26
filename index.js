/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {StrictMode} from 'react';
import state from './src/store/root-reducer';
import {PersistGate} from 'redux-persist/integration/react';

const Main = () => {
  return (
    <Provider store={state.store}>
      <PersistGate loading={null} persistor={state.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
