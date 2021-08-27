import {Columns, Pray, Comment} from './state';

export interface LoadData {
  loadData: Columns;
}

export interface GetPrayers {
  prayersData: Pray[];
}

export interface ToglePrayChek {
  pray: Pray;
}

export interface GetSinglePrayer {
  data: Pray;
}

export interface ChangePraуerRequest {
  id: number;
  title: string;
  checked: boolean;
}

export interface AddNewPrayerRequest {
  title: string;
  columnId: number;
}

export interface GetComments {
  commentsData: Comment[];
}

export interface AddNewPrayer {
  data: {
    checked: boolean;
    column: {
      id: number;
      title: string;
      description: null | string;
      userId: number;
    };
    columnId: number;
    description: null | string;
    id: number;
    title: string;
  };
}

export interface AddNewColumn {
  title: string;
}
