import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Desc} from './src/components/desk/desk';
import {Task} from './src/components/task/task';
import {Provider} from 'react-redux';
import {createStore} from '@reduxjs/toolkit';
import rootReduser from './src/store/index';
import {useState} from 'react';

const store = createStore(rootReduser);

const Stack = createNativeStackNavigator();

function App() {
  const [headerName, setheaderName] = useState('My Desc');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="My desk"
            component={Desc}
            initialParams={{setheaderName, headerName}}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Task"
            component={Task}
            initialParams={{setheaderName, headerName}}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
