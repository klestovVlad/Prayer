import React, {FC} from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {SignButton} from '../../../ui/sign-button';
import {UserAction} from '../../../store/user/slice';

import {InputField} from '../../../ui/form/input-field';
import {validateInput, validateEmail} from '../../../ui/functions/validation';

type SignInValues = {
  email: string;
  name: string;
  password: string;
};

export const RegistrateForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (values: SignInValues) => {
    dispatch(UserAction.singUpRequest(values));
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({values, handleSubmit}) => {
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
              <SignButton text="sing up" onPress={handleSubmit} />
            </View>
          );
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
`;

interface InputProps {
  validateError: boolean;
}
