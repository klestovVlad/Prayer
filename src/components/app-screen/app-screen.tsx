import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Desk} from './desk/index';
import {Task} from './task/task';
import {useState} from 'react';
import {PrayerDetails} from './prayer-details/prayer-details';

const Stack = createNativeStackNavigator();

export const AppScreen: React.FC = () => {
  const [headerName, setheaderName] = useState('My Desc');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="My desk"
          component={Desk}
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
        <Stack.Screen
          name="Prayer details"
          component={PrayerDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
