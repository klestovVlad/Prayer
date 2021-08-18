import React from 'react';
import {AppButton} from '../../../../ui/AppButton';
import {Container, Button, Input} from './styles';

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
        <AppButton type={0} />
      </Button>
      <Input placeholder="Add a tusk..." onBlur={() => setshowInput(false)} />
    </Container>
  ) : (
    <></>
  );
};
