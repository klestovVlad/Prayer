import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com/';

export const AxiosQuery = (query: string, data: any) => {
  axios
    .get(baseUrl + query, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

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
