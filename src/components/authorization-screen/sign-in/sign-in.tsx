import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {LoginForm} from './login-form';

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${colors.white};
`;

export const SingIn: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
