import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {LoadData} from './action-types';
import {state} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState: state,
  reducers: {
    loadData(state, action: PayloadAction<LoadData>) {
      action.payload.loadData;
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
