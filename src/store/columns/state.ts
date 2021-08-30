import {Prayer} from '../prayers/state';

export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: Record<string, Prayer>[];
}

export const initialState: Record<string, Columns> = {};
