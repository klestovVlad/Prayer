import React from 'react';
import {Container, Button, Text} from './styles';

export const ShowAnsweredButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <Text>Show Answered Prayers</Text>
      </Button>
    </Container>
  );
};
