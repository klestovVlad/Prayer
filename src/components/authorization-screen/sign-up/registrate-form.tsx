import React, {FC} from 'react';
import {useState} from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {SignButton} from '../../../ui/sign-button';
import {UserAction} from '../../../store/user/slice';

type SignInValues = {
  email: string;
  name: string;
  password: string;
};

export const RegistrateForm: React.FC = () => {
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const dispatch = useDispatch();

  const onSubmitForm = (values: SignInValues) => {
    console.log(values);
    dispatch(UserAction.singUpRequest(values));
  };

  const validate = (value: SignInValues) => {
    if (
      value.email === undefined ||
      value.password === undefined ||
      value.name === undefined
    ) {
      setemailError(value.email === undefined);
      setpasswordError(value.password === undefined);
      setNameError(value.name === undefined);
    } else {
      setemailError(false);
      setpasswordError(false);
      onSubmitForm(value);
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
                render={({input}) => {
                  return (
                    <View>
                      <EmailInput
                        placeholder="Write your email..."
                        onChangeText={input.onChange}
                        value={input.value}
                        validateError={emailError}
                      />
                    </View>
                  );
                }}
              />
              <Field
                name="name"
                render={({input}) => {
                  return (
                    <View>
                      <EmailInput
                        placeholder="Write your name..."
                        onChangeText={input.onChange}
                        value={input.value}
                        validateError={nameError}
                      />
                    </View>
                  );
                }}
              />
              <Field
                name="password"
                render={({input}) => {
                  return (
                    <PasswordInput
                      secureTextEntry={true}
                      placeholder="Write your password..."
                      onChangeText={input.onChange}
                      value={input.value}
                      validateError={passwordError}
                    />
                  );
                }}
              />
              <SignButton text="sing up" onPress={() => validate(values)} />
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
