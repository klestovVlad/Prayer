import * as React from 'react';
import {useSelector} from 'react-redux';
import {AppScreen} from './src/components/app-screen/app-screen';
import {AutorizationScreen} from './src/components/authorization-screen/autorization-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const data = useSelector((state: any) => state.UserReduser);
  console.log('Token: ', data.token);
  return data.token !== '' ? <AppScreen /> : <AutorizationScreen />;
}

export default App;
