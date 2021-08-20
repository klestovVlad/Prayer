import axios from 'axios';

const baseUrl = 'https://prayer.herokuapp.com/';

export const columnsQuery = (token: string) => {
  return axios.get(baseUrl + 'columns', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
