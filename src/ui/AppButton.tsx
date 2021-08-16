import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 22px;
  color: #72a8bc;
`;

interface AppButton {
  onPress?(): void;
  title: string;
}

export const AppButton: React.FC<AppButton> = ({onPress, title}) => (
  <Button onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </Button>
);
