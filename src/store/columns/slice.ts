import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddNewColumn} from './action-types';
import {initialState, Columns} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    columnRequest(state, action: PayloadAction<string>) {
      console.log('columnRequest', action);
    },
    getColumns(state, action: PayloadAction<Columns[]>) {
      return action.payload.reduce((accum: Record<string, Columns>, column) => {
        accum[column.id] = column;
        accum[column.id].prayers = [];
        return accum;
      }, {});
    },

    addNewColumnRequser(state, {payload}: PayloadAction<AddNewColumn>) {
      console.log('addNewColumnRequser', payload);
    },
    addNewColumn(state, action: PayloadAction<Columns>) {
      const column = action.payload;
      state[column.id] = column;
      state[column.id].prayers = [];
    },

    deleteColumnRequest(state, action: PayloadAction<number>) {
      console.log('deleteColumnRequest', action);
    },
    deleteColumn(state, action) {
      delete state[action.payload];
    },
  },
});

export default stateSlice.reducer;
export const columnAction = stateSlice.actions;
