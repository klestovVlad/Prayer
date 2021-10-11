import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Columns, initialState } from './state';

const stateSlice = createSlice({
  name: 'columnSlice',
  initialState,
  reducers: {
    setColumnsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setColumns(state, action: PayloadAction<Columns[]>) {
      state.data = action.payload.reduce((accum: Record<string, Columns>, column) => {
        accum[column.id] = column;
        accum[column.id].prayers = [];
        return accum;
      }, {});
      state.isError = false;
      state.errors = [];
    },
    addNewColumn(state, action: PayloadAction<Columns>) {
      const column = action.payload;
      state.data[column.id] = column;
      state.data[column.id].prayers = [];
    },
    deleteColumn(state, { payload }) {
      delete state.data[payload];
    },
    seColumnsError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default stateSlice.reducer;
export const columnAction = stateSlice.actions;
