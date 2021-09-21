/**
 * @format
 */
import { StrictMode } from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled, { ThemeProvider } from 'styled-components/native';
import App from './App';
import { name as appName } from './app.json';
import state from './src/store/root-reducer';
import { theme } from './src/style/theme';
import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';

const Main = () => (
  <ThemeProvider theme={theme}>
    <Provider store={state.store}>
      <PersistGate loading={null} persistor={state.persistor}>
        <StrictMode>
          <SafeArea>
            <App />
          </SafeArea>
        </StrictMode>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Main);

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
