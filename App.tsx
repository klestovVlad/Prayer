import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppScreen } from './src/components/app-screen/app-screen';
import { AuthorizationScreen } from './src/components/authorization-screen/authorization-screen';

function App() {
  const data = useSelector((state: any) => state.userReducer);
  return data.token !== '' ? <AppScreen /> : <AuthorizationScreen />;
}

export default App;
