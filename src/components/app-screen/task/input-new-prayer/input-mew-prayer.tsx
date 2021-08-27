import React from 'react';

import {AddIcon} from '../../../../ui/Icons/AddIcon';
import {colors} from '../../../../style/colors';
import {Container, IconContainer} from './styles';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {stateAction} from '../../../../store/data';
import {NewPrayerInput} from './new-pray-input/new-column-input';

interface InputNewPrayerProps {
  columnId: number;
}

export const InputNewPrayer: React.FC<InputNewPrayerProps> = ({columnId}) => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(stateAction.addNewPrayerRequest({title: values.title, columnId}));
    form.reset();
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({values, handleSubmit}) => (
        <Container>
          <IconContainer onPress={handleSubmit}>
            <AddIcon color={colors.blue} />
          </IconContainer>
          <Field
            name="title"
            placeholder="Add a prayer..."
            value={values}
            component={NewPrayerInput}
            onSubmitEditing={handleSubmit}
          />
        </Container>
      )}
    />
  );
};
