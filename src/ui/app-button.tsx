import { FC } from 'react';
import styled from 'styled-components/native';

import { SettingIcon } from './icons/setting-icon';

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 22px;
  color: #72a8bc;
`;

interface AppButton {
  onPress?(): void;
  type: number;
}

export const AppButton: FC<AppButton> = ({ onPress, type }: AppButton) => {
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
