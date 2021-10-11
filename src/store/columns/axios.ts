import { ApiMap } from '../../api';
import Api from '../../api/service';

const { Columns } = ApiMap;

export const columnsQuery = () => {
  return Columns.columnsControllerFindColumns();
};

export const deleteColumnPost = (columnId: number) => {
  return Columns.columnsControllerDelete({ columnId });
};

export const addNewColumnPost = (title: string) => {
  return Api.post('columns', { title, description: '' });
};
