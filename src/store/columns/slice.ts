import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddNewColumn } from './action-types';
import { Columns, initialState } from './state';

const stateSlice = createSlice({
  name: 'columnSlice',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    columnRequest(state) {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    initialStateRequest(state) {},
    setColumns(state, action: PayloadAction<Columns[]>) {
      return action.payload.reduce((accum: Record<string, Columns>, column) => {
        accum[column.id] = column;
        accum[column.id].prayers = [];
        return accum;
      }, {});
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addNewColumnRequest(state, { payload }: PayloadAction<AddNewColumn>) {},
    addNewColumn(state, action: PayloadAction<Columns>) {
      const column = action.payload;
      state[column.id] = column;
      state[column.id].prayers = [];
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteColumnRequest(state, { payload }: PayloadAction<number>) {},
    deleteColumn(state, { payload }) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const columnAction = stateSlice.actions;
