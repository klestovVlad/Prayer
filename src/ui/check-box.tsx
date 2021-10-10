import React, { FC } from 'react';
import styled from 'styled-components/native';

import { CheckedIcon } from './icons/checked-icon';

interface CheckBoxProps {
  checked: boolean;
  ChangeState(arg0: boolean): void;
}

export const CheckBox: FC<CheckBoxProps> = ({ checked, ChangeState }: CheckBoxProps) => {
  const toggleState = () => ChangeState(!checked);
  return checked ? (
    <CheckContainer onPress={toggleState}>
      <CheckedIcon />
    </CheckContainer>
  ) : (
    <CheckContainer onPress={toggleState} />
  );
};

const CheckContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-style: solid;
  border-color: #514d47;
  border-radius: 4px;
`;
