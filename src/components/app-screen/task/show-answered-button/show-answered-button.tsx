import React, { FC } from 'react';

import { Button, Container, Text } from './styles';

interface ShowAnsweredButtonProps {
  setshowAnswered(state: boolean): void;
  showAnswered: boolean;
}

export const ShowAnsweredButton: FC<ShowAnsweredButtonProps> = ({
  setshowAnswered,
  showAnswered,
}) => {
  return (
    <Container>
      <Button onPress={() => setshowAnswered(false)}>
        <Text>{showAnswered ? 'Hide Answered Prayers' : 'Show Answered Prayers'}</Text>
      </Button>
    </Container>
  );
};
