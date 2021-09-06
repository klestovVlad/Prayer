import React from 'react';
import styled from 'styled-components/native';
import {CheckedIcon} from './Icons/checked-icon';

const CheckContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-style: solid;
  border-color: #514d47;
  border-radius: 4px;
`;

interface CheckBoxProps {
  checked: boolean;
  ChangeState(arg0: boolean): void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({checked, ChangeState}: CheckBoxProps) => {
  const toggleState = () => {
    checked ? ChangeState(false) : ChangeState(true);
  };
  return checked ? (
    <CheckContainer onPress={toggleState}>
      <CheckedIcon />
    </CheckContainer>
  ) : (
    <CheckContainer onPress={toggleState} />
  );
};


