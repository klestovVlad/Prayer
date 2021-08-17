import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';

const Container = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const VerticalLine = styled.View`
  background-color: ${colors.red};
  height: 100%;
  width: 3px;
  border-radius: 3px;
`;

const Text = styled.Text`
  margin-left: 15px;
  font-size: 17px;
  line-height: 20px;
  color: ${colors.dark};
`;

export const LastPrayed = () => {
  return (
    <Container>
      <VerticalLine />
      <Text>Last prayed 8 min ago</Text>
    </Container>
  );
};
