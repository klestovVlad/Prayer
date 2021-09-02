import {ApiMap} from '../../api';

const {Authentication} = ApiMap;

type LoginData = {
  email: string;
  password: string;
};

type RegistrationData = {
  email: string;
  name: string;
  password: string;
};

export const signInQuery = (UserData: LoginData) => {
  return Authentication.authControllerSignIn({authSignInDto: UserData});
};

export const signUpQuery = (UserData: RegistrationData) => {
  return Authentication.authControllerSignUp({authSignUpDto: UserData});
};
