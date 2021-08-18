import React, {FC} from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../../style/colors';
import {SignButton} from '../../../ui/SignButton';

const Container = styled.View`
  background-color: ${colors.white};
`;

const Input = styled.TextInput`
  border-bottom-width: 3px;
  border-color: ${colors.grey};
  padding: 15px;
  color: ${colors.dark};
`;

export const LoginForm: React.FC = () => {
  const onSubmitForm = () => {
    console.log('Submit');
  };
  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({handleSubmit, values}) => {
          return (
            <View>
              <Field
                name="email"
                render={({input}) => {
                  return (
                    <Input
                      placeholder="Write your email..."
                      onChangeText={input.onChange}
                      value={input.value}
                    />
                  );
                }}
              />
              <Field
                name="password"
                render={({input}) => {
                  return (
                    <Input
                      placeholder="Write your password..."
                      onChangeText={input.onChange}
                      value={input.value}
                    />
                  );
                }}
              />
              <SignButton text="sing in" />
            </View>
          );
        }}
      />
    </Container>
  );
};
