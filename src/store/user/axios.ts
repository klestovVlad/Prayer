import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com/';

type UserData = {
  email: string;
  password: string;
};

export const signInQuery = (UserData: UserData) => {
  return axios.post(baseUrl + 'auth/sign-in', UserData);
};

export const signUpQuery = (UserData: UserData) => {
  return axios.post(baseUrl + 'auth/sign-up', UserData);
};
