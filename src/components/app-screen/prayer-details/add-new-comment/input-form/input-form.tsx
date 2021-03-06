import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Input } from './styles';

interface CommentInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const CommentInput: FC<CommentInputProps> = (props) => {
  return <Input {...props} onChange={props.input.onChange} value={props.input.value} />;
};
