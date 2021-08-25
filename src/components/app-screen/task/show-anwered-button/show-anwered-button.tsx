import React from 'react';
import {Container, Button, Text} from './styles';

interface ShowAnsweredButtonProps {
  setshowAnswered(state: boolean): void;
}

export const ShowAnsweredButton: React.FC<ShowAnsweredButtonProps> = ({
  setshowAnswered,
}) => {
  return (
    <Container>
      <Button onPress={() => setshowAnswered(false)}>
        <Text>Show Answered Prayers</Text>
      </Button>
    </Container>
  );
};
