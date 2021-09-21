import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Input } from './styles';

interface NewPrayerInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const NewPrayerInput: FC<NewPrayerInputProps> = props => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
    />
  );
};
