import React from 'react';
import styled from 'styled-components/native';

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

interface SwipebleDeliteButtonProps {
  onPress(): void;
}

export const SwipebleDeliteButton: React.FC<SwipebleDeliteButtonProps> = ({
  onPress,
}) => {
  return (
    <Button onPress={onPress}>
      <Text>Delete</Text>
    </Button>
  );
};
