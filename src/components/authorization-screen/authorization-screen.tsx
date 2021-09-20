import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { signIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LoadIcon } from '../../ui/icons/loading';
import { useSelector } from 'react-redux';
import { Container, Block, Header } from './styles';
import { RootState } from '../../store/root-reducer';

const Tab = createMaterialTopTabNavigator();

export const AuthorizationScreen = () => {
  const { loading } = useSelector((state: RootState) => state.userReducer);
  return loading ? (
    <Container>
      <Header>PRAYER</Header>
      <LoadIcon />
    </Container>
  ) : (
    <Container>
      <Block>
        <Header>PRAYER</Header>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Sign in" component={signIn} />
            <Tab.Screen name="Sign up" component={SignUp} />
          </Tab.Navigator>
        </NavigationContainer>
      </Block>
    </Container>
  );
};
