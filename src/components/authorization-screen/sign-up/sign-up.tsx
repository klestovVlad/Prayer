import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {LoginForm} from './login-form';

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${colors.white};
`;

const SignRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const UnderLine = styled.View`
  width: 90%;
  height: 3px;
  background-color: ${colors.blue};
  border-radius: 3px;
  margin-top: 10px;
`;

const Text = styled.Text`
  font-size: 17px;
  text-align: center;
`;

const SignInContainer = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  align-items: center;
`;

const SignUpContainer = styled.View`
  width: 50%;
`;
interface SingInProps {
  navigation: any;
  route: any;
}
export const SingUp: React.FC<SingInProps> = ({navigation}) => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
