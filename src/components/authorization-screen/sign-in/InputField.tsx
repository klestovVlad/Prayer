import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import styled from 'styled-components/native';

import {colors} from '../../../style/colors';

interface NewColumnInputProps extends FieldRenderProps<string> {
  placeholder: string;
  validateError: boolean;
}

export const InputField: React.FC<NewColumnInputProps> = props => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
      validateError={props.validateError}
    />
  );
};

interface InputProps {
  validateError: boolean;
}

const Input = styled.TextInput<InputProps>`
  border-bottom-width: 3px;
  border-color: ${props => (props.validateError ? colors.red : colors.grey)};
  padding: 15px;
  color: ${colors.dark};
  margin: 0 15px 0 15px;
`;
