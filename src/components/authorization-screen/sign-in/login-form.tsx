import React, {FC} from 'react';
import {useState} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {SignButton} from '../../../ui/sign-button';
import {UserAction} from '../../../store/user/slice';
import {InputField} from './InputField';

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
      UserAction.singInRequest({
        email: values.email,
        password: values.password,
      }),
    );
  };

  const validate = (values: FormProps) => {
    console.log(values);
    if (values.email === undefined || values.password === undefined) {
      setemailError(values.email === undefined);
      setpasswordError(values.password === undefined);
    } else {
      setemailError(false);
      setpasswordError(false);
      onSubmitForm(values);
    }
  };
  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({values}) => {
          return (
            <View>
              <Field
                name="email"
                placeholder="Write your email..."
                value={values}
                validateError={emailError}
                component={InputField}
              />
              <Field
                name="password"
                secureTextEntry={true}
                placeholder="Write your password..."
                value={values}
                validateError={passwordError}
                component={InputField}
              />
              <SignButton text="sing in" onPress={() => validate(values)} />
            </View>
          );
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colors.white};
`;

interface InputProps {
  validateError: boolean;
}

const EmailInput = styled.TextInput<InputProps>`
  border-bottom-width: 3px;
  border-color: ${props => (props.validateError ? colors.red : colors.grey)};
  padding: 15px;
  color: ${colors.dark};
  margin: 0 15px 0 15px;
`;

const PasswordInput = styled(EmailInput)`
  border-color: ${props => (props.validateError ? colors.red : colors.grey)};
`;
