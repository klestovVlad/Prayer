import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components/native';

interface NewColumnInputProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const InputField: FC<NewColumnInputProps> = (props) => {
  return (
    <Input
      {...props}
      onChange={props.input.onChange}
      value={props.input.value}
      validateError={props.meta.error !== undefined && !!props.meta.touched}
    />
  );
};

interface InputProps {
  validateError: boolean | undefined;
}

const Input = styled.TextInput<InputProps>`
  border-bottom-width: 3px;
  border-color: ${(props) =>
    props.validateError ? props.theme.colors.red : props.theme.colors.grey};
  padding: 15px;
  color: ${(props) => props.theme.colors.dark};
  margin: 0 15px 0 15px;
`;
