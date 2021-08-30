import React from 'react';
import styled from 'styled-components/native';

import {RegistrateForm} from './sign-up-form';

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const SingUp: React.FC = () => {
  return (
    <Container>
      <RegistrateForm />
    </Container>
  );
};
