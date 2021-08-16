import React from 'react';
import styled from 'styled-components/native';
import {ChekedIcon} from './Icons/chekedIcon';

const CheckContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-style: solid;
  border-color: #514d47;
  border-radius: 4px;
`;

interface CheckBoxProps {
  Cheked: boolean;
  ChangeState(arg0: boolean): void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({Cheked, ChangeState}) => {
  const toggleState = () => {
    Cheked ? ChangeState(false) : ChangeState(true);
  };
  return Cheked ? (
    <CheckContainer onPress={toggleState}>
      <ChekedIcon />
    </CheckContainer>
  ) : (
    <CheckContainer onPress={toggleState} />
  );
};
