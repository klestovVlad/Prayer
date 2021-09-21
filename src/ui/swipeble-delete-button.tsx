import React, { FC } from 'react';
import styled from 'styled-components/native';

interface SwipeableDeleteButtonProps {
  onPress(): void;
}
export const SwipeableDeleteButton: FC<SwipeableDeleteButtonProps> = ({
  onPress,
}) => {
  return (
    <Button onPress={onPress}>
      <Text>Delete</Text>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: ${props => props.theme.colors.red};
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;
