import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {signIn} from './sign-in/sign-in';
import {SingUp} from './sign-up/sign-up';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoadIcon} from '../../ui/Icons/loading';
import {useSelector} from 'react-redux';
import {Container, Block, Header} from './styles';

const Tab = createMaterialTopTabNavigator();

export const AutorizationScreen = () => {
  const {loading} = useSelector((state: any) => state.userReducer);
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
            <Tab.Screen name="Sign up" component={SingUp} />
          </Tab.Navigator>
        </NavigationContainer>
      </Block>
    </Container>
  );
};
