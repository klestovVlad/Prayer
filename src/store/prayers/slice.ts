import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AddNewPrayer,
  AddNewPrayerRequest,
  ChangePraуerRequest,
  GetSinglePrayer,
} from './action-types';
import { initialState, Prayer } from './state';

const stateSlice = createSlice({
  name: 'prayerSlice',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    prayersRequest(state) {},
    setPrayers(state, { payload }: PayloadAction<Prayer[]>) {
      return payload.reduce((accum: Record<string, Prayer>, prayer) => {
        accum[prayer.id] = prayer;
        accum[prayer.id].comments = [];
        return accum;
      }, {});
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changePraуerRequest(state, payload: PayloadAction<ChangePraуerRequest>) {},
    getSinglePrayer(state, { payload }: PayloadAction<GetSinglePrayer>) {
      const { data } = payload;
      state[data.id] = data;
    },

    addNewPrayerRequest(
      state,
      { payload }: PayloadAction<AddNewPrayerRequest>, // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {},
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
      state[prayer.id] = prayer;
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deletePrayerRequest(state, { payload }: PayloadAction<number>) {},
    deletePrayer(state, { payload }: PayloadAction<number>) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const prayerAction = stateSlice.actions;
