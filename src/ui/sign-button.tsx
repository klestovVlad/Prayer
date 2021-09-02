import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  padding: 8px 60px;
  background-color: ${props => props.theme.colors.blue};
  align-items: center;
  border-radius: 30px;
  margin: 30px 15px 15px 15px;
`;

const Text = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;
interface SignButtonProps {
  text: string;
  onPress(): void;
}

export const SignButton: React.FC<SignButtonProps> = ({text, onPress}: SignButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};


