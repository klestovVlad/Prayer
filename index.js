/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import state from './src/store/root-reducer';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/style/theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={state.store}>
        <PersistGate loading={null} persistor={state.persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
