import React from 'react';
import styled from 'styled-components/native';
import {AddIcon} from '../../../ui/Icons/AddIcon';
import {colors} from '../../style/colors';

const Container = styled.View`
  margin: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 15px 15px 15px 52px;
`;

const Input = styled.TextInput`
  font-size: 17px;
  color: #9c9c9c;
  padding: 0;
`;

const IconContainer = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 15px;
  transform: translateY(3px);
`;

export const InputNewPrayer: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <AddIcon color={colors.blue} />
      </IconContainer>
      <Input />
    </Container>
  );
};
