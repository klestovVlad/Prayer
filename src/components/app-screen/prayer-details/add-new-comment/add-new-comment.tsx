import { FormApi } from 'final-form';
import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { addNewCommentAction } from '../../../../store/comments/';
import { CommentIcon } from '../../../../ui/icons/comment-icon';
import { CommentInput } from './input-form/input-form';
import { Container } from './styles';
interface AddNewCommentProps {
  columnId: number;
  prayerId: number;
}

export const AddNewComment: FC<AddNewCommentProps> = ({ prayerId }) => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(addNewCommentAction({ title: values.title, prayerId }));
    form.reset();
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ values, handleSubmit }) => (
        <Container>
          <CommentIcon />
          <Field
            name="title"
            placeholder="Add a comment..."
            value={values}
            component={CommentInput}
            onSubmitEditing={handleSubmit}
          />
        </Container>
      )}
    />
  );
};
