import * as React from 'react';
import styled from 'styled-components/native';

import { RegistrationForm } from './sign-up-form';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <RegistrationForm />
    </Container>
  );
};

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;
