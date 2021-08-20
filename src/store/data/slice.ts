import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {LoadData} from './action-types';
import {state} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState: state,
  reducers: {
    columnRequest() {
      console.log('columns');
    },
    getColumns(data, {payload}: any) {
      return payload;
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
