import { Prayer } from '../prayers/state';

export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: Record<string, Prayer>[];
}

export interface ColumnsData {
  data: Record<string, Columns>;
  errors: string[];
  isError: boolean;
  isLoading: boolean;
}

export const initialState: ColumnsData = {
  data: {},
  errors: [],
  isError: false,
  isLoading: false,
};

export interface AddNewColumn {
  title: string;
}
