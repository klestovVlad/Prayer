import {ApiMap} from '../../api';
import Api from '../../api/servise';

const {Columns} = ApiMap;

export const columnsQuery = () => {
  return Columns.columnsControllerFindColumns();
};

export const deleteColumnPost = (columnId: number) => {
  return Columns.columnsControllerDelete({columnId});
};

export const addNewColumnPost = (title: string) => {
  // return Columns.columnsControllerCreate({title, description: ''});
  return Api.post('columns', {title, description: ''});
};
