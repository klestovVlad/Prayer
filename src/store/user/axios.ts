import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com/';

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
  return axios.post(baseUrl + 'auth/sign-in', UserData);
};

export const signUpQuery = (UserData: RegistrationData) => {
  return axios.post(baseUrl + 'auth/sign-up', UserData);
};
