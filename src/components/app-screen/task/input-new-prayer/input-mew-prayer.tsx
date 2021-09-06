import React, {useContext}  from 'react';

import {AddIcon} from '../../../../ui/Icons/add-icon';
import {Container, IconContainer} from './styles';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {prayerAction} from '../../../../store/prayers/slice';
import {NewPrayerInput} from './input-form/input-form';

import {ThemeContext} from 'styled-components';

interface InputNewPrayerProps {
  columnId: number;
}

export const InputNewPrayer: React.FC<InputNewPrayerProps> = ({columnId}: InputNewPrayerProps) => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(prayerAction.addNewPrayerRequest({title: values.title, columnId}));
    form.reset();
  };

  const themeContext = useContext(ThemeContext);

  return (
    <Form
      onSubmit={onSubmitForm}
      render={({values, handleSubmit}) => (
        <Container>
          <IconContainer onPress={handleSubmit}>
            <AddIcon color={themeContext.colors.blue} />
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
