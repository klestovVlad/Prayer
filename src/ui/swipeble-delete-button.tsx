import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';

export const SwipebleDeliteButton: React.FC = () => {
  return (
    <Button>
      <Text>Delete</Text>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.Text`
  font-size: 17px;
  color: ${colors.white};
`;
