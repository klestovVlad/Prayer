import React from 'react';
import {Input} from './styles';
import {FieldRenderProps} from 'react-final-form';

interface NewPrayerInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const NewPrayerInput: React.FC<NewPrayerInputProps> = props => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
    />
  );
};
