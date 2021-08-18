import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';

const Button = styled.TouchableOpacity`
  padding: 8px 60px;
  background-color: ${colors.blue};
  align-items: center;
  border-radius: 30px;
  margin: 30px 15px 15px 15px;
`;

const Text = styled.Text`
  font-size: 17px;
  color: ${colors.white};
`;

interface SignButtonProps {
  text: string;
}

export const SignButton: React.FC<SignButtonProps> = ({text}) => {
  return (
    <Button>
      <Text>{text}</Text>
    </Button>
  );
};
