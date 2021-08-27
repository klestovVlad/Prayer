import React from 'react';
import {
  ButtonContainer,
  DeleteButton,
  CancelButton,
  ButtonText,
} from './styled';
import {stateAction} from '../../../../../store/data/index';
import {useDispatch} from 'react-redux';

interface TaskRowButtonsProps {
  visible: boolean;
  setwrappedUp(): void;
  columnId: number;
}

export const TaskRowButtons: React.FC<TaskRowButtonsProps> = ({
  visible,
  setwrappedUp,
  columnId,
}) => {
  const dispatch = useDispatch();
  return (
    <ButtonContainer visible={visible}>
      <DeleteButton
        onPress={() => dispatch(stateAction.deleteColumnRequest(columnId))}>
        <ButtonText>delete</ButtonText>
      </DeleteButton>
      <CancelButton onPress={setwrappedUp}>
        <ButtonText>cancel</ButtonText>
      </CancelButton>
    </ButtonContainer>
  );
};
