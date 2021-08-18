import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SingIn} from './sign-in/sign-in';
import {SingUp} from './sign-up/sign-up';
import styled from 'styled-components/native';
import {colors} from '../../style/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.white};
`;

const Block = styled.View`
  height: 310px;
  background-color: ${colors.white};
`;

const Header = styled.Text`
  font-size: 36px;
  color: ${colors.dark};
  text-align: center;
  margin-bottom: 15px;
`;

export const AutorizationScreen = () => {
  return (
    <Container>
      <Block>
        <Header>PRAYER</Header>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Sign in" component={SingIn} />
            <Tab.Screen name="Sign up" component={SingUp} />
          </Tab.Navigator>
        </NavigationContainer>
      </Block>
    </Container>
  );
};
