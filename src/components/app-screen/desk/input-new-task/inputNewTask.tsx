import React from 'react';
import {AppButton} from '../../../../ui/app-button';
import {Container, Button} from './styles';
import {Field, Form, FormProps} from 'react-final-form';
import {NewColumnInput} from './new-column-input/new-column-input';
import {useDispatch} from 'react-redux';
import {columnAction} from '../../../../store/columns/slice';
interface InputNewTaskProps {
  showInput: boolean;
  setshowInput(arg0: boolean): void;
}

export const InputNewTask: React.FC<InputNewTaskProps> = ({
  showInput,
  setshowInput,
}) => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: FormProps) => {
    dispatch(columnAction.addNewColumnRequser({title: values.title}));
    setshowInput(false);
  };
  return showInput ? (
    <Form
      onSubmit={onSubmitForm}
      render={({values, handleSubmit}) => {
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
  ) : (
    <></>
  );
};
