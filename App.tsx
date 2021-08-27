import * as React from 'react';
import {useSelector} from 'react-redux';
import {AppScreen} from './src/components/app-screen/app-screen';
import {AutorizationScreen} from './src/components/authorization-screen/autorization-screen';

function App() {
  const data = useSelector((state: any) => state.UserReduser);
  return data.token !== '' ? <AppScreen /> : <AutorizationScreen />;
}

export default App;
