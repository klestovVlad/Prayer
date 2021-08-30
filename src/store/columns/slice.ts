import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddNewColumn} from './action-types';
import {initialState, Columns} from './state';

const stateSlice = createSlice({
  name: 'columnSlice',
  initialState,
  reducers: {
    columnRequest(state, {payload}: PayloadAction<string>) {
      console.log('columnRequest', payload);
    },
    setColumns(state, action: PayloadAction<Columns[]>) {
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

    deleteColumnRequest(state, {payload}: PayloadAction<number>) {
      console.log('deleteColumnRequest', payload);
    },
    deleteColumn(state, {payload}) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const columnAction = stateSlice.actions;
