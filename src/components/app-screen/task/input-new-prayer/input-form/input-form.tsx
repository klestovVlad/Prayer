import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Input } from './styles';

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
