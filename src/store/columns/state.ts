import {Prayer} from '../prayers/state';

export interface Comment {
  body: string;
  created: string;
  id: number;
  prayerId: number;
}

export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: Record<string, Prayer>[];
}

export const initialState: Record<string, Columns> = {};
