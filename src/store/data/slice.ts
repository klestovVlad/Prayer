import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    columnRequest() {},
    getColumns(state, action) {
      console.log('getColumns');
      console.log(state);
      state = {...action.payload, prayers: [1, 2, 3]};
      return state;
    },
    prayersRequest() {},
    getPrayers(state, {payload}: any) {
      state = payload.data.map(column => {
        payload.state.map(pray => {
          column.id === pray.columnId ? column.prayers.push(pray) : null;
        });
      });
      console.log('getPra state:', state);
      return state;
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
