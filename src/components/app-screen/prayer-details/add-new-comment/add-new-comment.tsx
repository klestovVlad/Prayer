import React from 'react';
import {CommentIcon} from '../../../../ui/Icons/CommentIcon';
import {FormApi} from 'final-form';
import {Container} from './styles';
import {Field, Form, FormProps} from 'react-final-form';
import {CommentInput} from './input-form/input-form';
import {useDispatch} from 'react-redux';
import {commentsAction} from '../../../../store/comments/slice';
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
    console.log(values, columnId, prayerId);
    dispatch(
      commentsAction.addNewCommentRequest({title: values.title, prayerId}),
    );
    form.reset();
  };
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({values, handleSubmit}) => (
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
