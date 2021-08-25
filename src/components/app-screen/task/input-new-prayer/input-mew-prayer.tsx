import React from 'react';

import {AddIcon} from '../../../../ui/Icons/AddIcon';
import {colors} from '../../../../style/colors';
import {Container, Input, IconContainer} from './styles';
import {Field, Form} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {stateAction} from '../../../../store/data';

interface InputNewPrayerProps {
  columnId: number;
}

type FormType = {
  title: string;
};

export const InputNewPrayer: React.FC<InputNewPrayerProps> = ({columnId}) => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormType) => {
    dispatch(stateAction.addNewPrayerRequest({...values, columnId}));
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({values}) => (
        <Container>
          <IconContainer onPress={() => onSubmitForm(values)}>
            <AddIcon color={colors.blue} />
          </IconContainer>
          <Field
            name="title"
            render={({input}) => {
              return (
                <Input onChangeText={input.onChange} value={input.value} />
              );
            }}
          />
        </Container>
      )}
    />
  );
};
