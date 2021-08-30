import React from 'react';
import styled from 'styled-components/native';
import {SettingIcon} from './Icons/setting-Icon';
interface AppButton {
  onPress?(): void;
  type: number;
}

export const AppButton: React.FC<AppButton> = ({onPress, type}) => {
  return type === 0 ? (
    <Button onPress={onPress}>
      <ButtonText>+</ButtonText>
    </Button>
  ) : (
    <Button onPress={onPress}>
      <SettingIcon />
    </Button>
  );
};

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 22px;
  color: #72a8bc;
`;
