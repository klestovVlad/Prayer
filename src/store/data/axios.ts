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
