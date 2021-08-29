import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ChangePraуerRequest,
  GetSinglePrayer,
  AddNewPrayerRequest,
  AddNewPrayer,
} from './action-types';
import {initialState, Prayer} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    prayersRequest() {},
    getPrayers(state, {payload}: PayloadAction<Prayer[]>) {
      return payload.reduce((accum: Record<string, Prayer>, prayer) => {
        accum[prayer.id] = prayer;
        accum[prayer.id].comments = [];
        return accum;
      }, {});
    },

    changePraуerRequest(state, payload: PayloadAction<ChangePraуerRequest>) {
      console.log('changePraуerRequest', payload);
    },
    getSinglePrayer(state, {payload}: PayloadAction<GetSinglePrayer>) {
      const {data} = payload;
      state[data.id] = data;
    },

    addNewPrayerRequest(state, {payload}: PayloadAction<AddNewPrayerRequest>) {
      console.log('addNewPrayerRequest', payload);
    },
    addNewPrayer(state, {payload}: PayloadAction<AddNewPrayer>) {
      const {data} = payload;
      const prayer: Prayer = {
        id: data.id,
        title: data.title,
        description: data.description,
        checked: data.checked,
        columnId: data.columnId,
        comments: [],
      };
      state[prayer.id] = prayer;
    },

    deletePrayerRequest(state, {payload}: PayloadAction<number>) {
      console.log('deletePrayerRequest', payload);
    },
    deletePrayer(state, {payload}: PayloadAction<number>) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const prayerAction = stateSlice.actions;
