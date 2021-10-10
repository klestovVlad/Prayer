import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { columnAction } from '../../../../../store/columns/slice';
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
      <DeleteButton onPress={() => dispatch(columnAction.deleteColumnRequest(columnId))}>
        <ButtonText>delete</ButtonText>
      </DeleteButton>
      <CancelButton onPress={setwrappedUp}>
        <ButtonText>cancel</ButtonText>
      </CancelButton>
    </ButtonContainer>
  );
};
