import { FormApi } from 'final-form';
import React, { FC, useContext } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { addNewPrayerAction } from '../../../../store/prayers/actions';
import { AddIcon } from '../../../../ui/icons/add-icon';
import { NewPrayerInput } from './input-form/input-form';
import { Container, IconContainer } from './styles';

interface InputNewPrayerProps {
  columnId: number;
}

export const InputNewPrayer: FC<InputNewPrayerProps> = ({
  columnId,
}: InputNewPrayerProps) => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(addNewPrayerAction({ title: values.title, columnId }));
    form.reset();
  };

  const themeContext = useContext(ThemeContext);

  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
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
