import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {RegistrateForm} from './registrate-form';

const Container = styled.View`
  margin-top: 0px;
  flex: 1;
  background-color: ${colors.white};
`;

export const SingUp: React.FC = () => {
  return (
    <Container>
      <RegistrateForm />
    </Container>
  );
};
