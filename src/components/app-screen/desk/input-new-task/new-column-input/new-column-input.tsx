import React from 'react';
import {Input} from './styles';
import {FieldRenderProps} from 'react-final-form';

interface NewColumnInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const NewColumnInput: React.FC<NewColumnInputProps> = props => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
    />
  );
};
