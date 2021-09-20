import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Desk } from './desk/index';
import { PrayerDetails } from './prayer-details/prayer-details';
import { Task } from './task/task';

const Stack = createNativeStackNavigator();

export const AppScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="My desk"
          component={Desk}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
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
