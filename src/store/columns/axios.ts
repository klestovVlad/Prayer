import Api from '../../api/servise';

export const columnsQuery = () => {
  return Api.get('columns');
};

export const deleteColumnPost = (columnId: number) => {
  return Api.delete(`columns/${columnId}`);
};

export const addNewColumnPost = (title: string) => {
  return Api.post('columns', {title, description: ''});
};
