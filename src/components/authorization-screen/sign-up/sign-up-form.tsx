import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
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
  name: string;
  password: string;
};

export const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: SignInValues) => {
    dispatch(UserAction.signUpRequest(values));
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
                name="name"
                secureTextEntry={true}
                placeholder="Write your name..."
                value={values.name}
                validate={validateInput}
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
              <SignButton text="sign up" onPress={handleSubmit} />
            </View>
          );
        }}
      />
    </Container>
  );
};
