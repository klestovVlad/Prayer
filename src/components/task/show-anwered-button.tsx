import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: relative;
  margin: 0 15px;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  padding: 8px 23px;
  background-color: #bfb393;
  border-radius: 15px;
  margin: 0 auto;
`;

const Text = styled.Text`
  text-transform: uppercase;
  color: white;
`;

export const ShowAnsweredButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <Text>Show Answered Prayers</Text>
      </Button>
    </Container>
  );
};
