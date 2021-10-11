import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { deleteColumnAction } from '../../../../../store/columns/';
import { ButtonContainer, ButtonText, CancelButton, DeleteButton } from './styled';

interface TaskRowButtonsProps {
  visible: boolean;
  setwrappedUp(): void;
  columnId: number;
}

export const TaskRowButtons: FC<TaskRowButtonsProps> = ({
  visible,
  setwrappedUp,
  columnId,
}) => {
  const dispatch = useDispatch();
  return (
    <ButtonContainer visible={visible}>
      <DeleteButton onPress={() => dispatch(deleteColumnAction(columnId))}>
        <ButtonText>delete</ButtonText>
      </DeleteButton>
      <CancelButton onPress={setwrappedUp}>
        <ButtonText>cancel</ButtonText>
      </CancelButton>
    </ButtonContainer>
  );
};
