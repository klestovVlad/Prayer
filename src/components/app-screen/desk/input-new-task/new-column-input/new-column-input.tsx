import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Input } from './styles';

interface NewColumnInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const NewColumnInput: FC<NewColumnInputProps> = props => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
    />
  );
};
