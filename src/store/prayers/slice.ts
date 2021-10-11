import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddNewPrayer, GetSinglePrayer } from './state';
import { initialState, Prayer } from './state';

const stateSlice = createSlice({
  name: 'prayerSlice',
  initialState,
  reducers: {
    setPrayersLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setPrayers(state, { payload }: PayloadAction<Prayer[]>) {
      state.data = payload.reduce((accum: Record<string, Prayer>, prayer) => {
        accum[prayer.id] = prayer;
        accum[prayer.id].comments = [];
        return accum;
      }, {});
      state.isError = false;
      state.errors = [];
    },
    getSinglePrayer(state, { payload }: PayloadAction<GetSinglePrayer>) {
      const { data } = payload;
      state.data[data.id] = data;
    },
    addNewPrayer(state, { payload }: PayloadAction<AddNewPrayer>) {
      const { data } = payload;
      const prayer: Prayer = {
        id: data.id,
        title: data.title,
        description: data.description,
        checked: data.checked,
        columnId: data.columnId,
        comments: [],
      };
      state.data[prayer.id] = prayer;
    },
    deletePrayer(state, { payload }: PayloadAction<number>) {
      delete state.data[payload];
    },
    setPrayersError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default stateSlice.reducer;
export const prayerAction = stateSlice.actions;
