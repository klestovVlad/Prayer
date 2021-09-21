import { FormApi } from 'final-form';
import React from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { commentsAction } from '../../../../store/comments/slice';
import { CommentIcon } from '../../../../ui/icons/comment-icon';
import { CommentInput } from './input-form/input-form';
import { Container } from './styles';
interface AddNewCommentProps {
  columnId: number;
  prayerId: number;
}

export const AddNewComment: React.FC<AddNewCommentProps> = ({
  columnId,
  prayerId,
}) => {
  const dispatch = useDispatch();
  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(
      commentsAction.addNewCommentRequest({ title: values.title, prayerId }),
    );
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
