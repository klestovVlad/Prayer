import React, { FC } from 'react';

import { Container, Text, VerticalLine } from './styles';

export const LastPrayed: FC = () => {
  return (
    <Container>
      <VerticalLine />
      <Text>Last prayed 8 min ago</Text>
    </Container>
  );
};
