import {Columns, Pray} from './state';

export interface LoadData {
  loadData: Columns;
}

export interface GetPrayers {
  data: Columns[];
  prayersData: Pray[];
}

export interface ToglePrayChek {
  data: Columns[];
  pray: Pray;
}

export interface GetSinglePrayer {
  store: Columns[];
  data: Pray;
}

export interface ChangePraуerRequest {
  id: number;
  title: string;
  checked: boolean;
}
