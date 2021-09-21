import React from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { UserAction } from '../../../store/user/slice';
import { InputField } from '../../../ui/form/input-field';
import { validateEmail, validateInput } from '../../../ui/functions/validation';
import { SignButton } from '../../../ui/sign-button';

const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
`;

interface InputProps {
  validateError: boolean;
}

type SignInValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: FormProps) => {
    dispatch(
      UserAction.signInRequest({
        email: values.email,
        password: values.password,
      }),
    );
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({ values, handleSubmit }) => {
          return (
            <View>
              <Field
                name="email"
                placeholder="Write your email..."
                value={values.email}
                validate={validateEmail}
                component={InputField}
              />
              <Field
                name="password"
                secureTextEntry={true}
                placeholder="Write your password..."
                value={values.password}
                validate={validateInput}
                component={InputField}
              />
              <SignButton text="sign in" onPress={handleSubmit} />
            </View>
          );
        }}
      />
    </Container>
  );
};
