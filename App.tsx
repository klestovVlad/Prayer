import * as React from 'react';
import {AppScreen} from './src/components/app-screen/appScreen';
import {AutorizationScreen} from './src/components/authorization-screen/autorization-screen';

function App() {
  const token = true;
  return token ? <AppScreen /> : <AutorizationScreen />;
}

export default App;
