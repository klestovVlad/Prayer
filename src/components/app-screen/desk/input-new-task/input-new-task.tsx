import { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { columnAction } from '../../../../store/columns/slice';
import { AppButton } from '../../../../ui/app-button';
import { NewColumnInput } from './new-column-input/new-column-input';
import { Button, Container } from './styles';
interface InputNewTaskProps {
  showInput: boolean;
  setshowInput(arg0: boolean): void;
}

export const InputNewTask: FC<InputNewTaskProps> = ({
  showInput,
  setshowInput,
}) => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: FormProps) => {
    dispatch(columnAction.addNewColumnRequest({ title: values.title }));
    setshowInput(false);
  };
  return showInput ? (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => {
        return (
          <Container>
            <Button>
              <AppButton type={0} onPress={handleSubmit} />
            </Button>
            <Field
              name="title"
              placeholder="Add a column..."
              value={values}
              component={NewColumnInput}
              onSubmitEditing={handleSubmit}
            />
          </Container>
        );
      }}
    />
  ) : null;
};
