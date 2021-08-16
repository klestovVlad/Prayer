import React from 'react';
import styled from 'styled-components/native';
import {AppButton} from '../../ui/AppButton';

const Input = styled.TextInput`
  padding: 20px 15px 20px 35px;
  margin: 15px 15px 0 15px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 17px;
  color: #514d47;
`;

const Button = styled.View`
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 2;
  transform: translateY(-7px);
`;

const Container = styled.View`
  position: relative;
`;

interface InputNewTaskProps {
  showInput: boolean;
  setshowInput(arg0: boolean): void;
}

export const InputNewTask: React.FC<InputNewTaskProps> = ({
  showInput,
  setshowInput,
}) => {
  return showInput ? (
    <Container>
      <Button>
        <AppButton title="+" />
      </Button>
      <Input placeholder="Add a tusk..." onBlur={() => setshowInput(false)} />
    </Container>
  ) : (
    <></>
  );
};
