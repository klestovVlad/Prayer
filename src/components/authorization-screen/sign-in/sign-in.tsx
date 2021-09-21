import * as React from 'react';
import styled from 'styled-components/native';

import { LoginForm } from './sign-in-form';

export const signIn: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;
