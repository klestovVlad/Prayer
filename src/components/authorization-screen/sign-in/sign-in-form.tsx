import React, {FC} from 'react';
import {useState} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {SignButton} from '../../../ui/sign-button';
import {UserAction} from '../../../store/user/slice';
import {InputField} from '../../../ui/form/input-field';

import {validateInput, validateEmail} from '../../../ui/functions/validation';

type SignInValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

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
        render={({values, handleSubmit}) => {
          return (
            <View>
              <Field
                name="email"
                placeholder="Write your email..."
                value={values}
                validate={validateEmail}
                component={InputField}
              />
              <Field
                name="password"
                secureTextEntry={true}
                placeholder="Write your password..."
                value={values}
                validate={validateInput}
                component={InputField}
              />
              <SignButton text="sing in" onPress={handleSubmit} />
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

const EmailInput = styled.TextInput<InputProps>`
  border-bottom-width: 3px;
  border-color: ${props =>
    props.validateError ? props.theme.colors.red : props.theme.colors.grey};
  padding: 15px;
  color: ${props => props.theme.colors.dark};
  margin: 0 15px 0 15px;
`;

const PasswordInput = styled(EmailInput)`
  border-color: ${props =>
    props.validateError ? props.theme.colors.red : props.theme.colors.grey};
`;
