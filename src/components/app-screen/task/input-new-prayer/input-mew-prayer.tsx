import { FormApi } from 'final-form';
import { useContext } from 'react';
import { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { prayerAction } from '../../../../store/prayers/slice';
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
    dispatch(
      prayerAction.addNewPrayerRequest({ title: values.title, columnId }),
    );
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
