import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetPrayers,
  ChangePraуerRequest,
  GetSinglePrayer,
  AddNewPrayerRequest,
  AddNewPrayer,
  GetComments,
} from './action-types';
import {initialState, Columns, Pray} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    columnRequest() {},
    getColumns(state, action: PayloadAction<Columns[]>) {
      action.payload.map(column => {
        column.prayers = [];
      });
      console.log({...action.payload});
      return {...action.payload};
    },
    prayersRequest() {},
    getPrayers(state, action: PayloadAction<GetPrayers>) {
      const {prayersData} = action.payload;
      for (let key in state) {
        const foundPrays: Pray[] = [];
        prayersData.forEach(pray => {
          pray.columnId === state[key].id ? foundPrays.push(pray) : null;
        });
        state[key].prayers = state[key].prayers.concat(foundPrays);
      }
    },
    getComments(state, action: PayloadAction<GetComments>) {
      const {commentsData} = action.payload;
      console.log(commentsData);
    },
    changePraуerRequest(state, action: PayloadAction<ChangePraуerRequest>) {},
    getSinglePrayer(state, action: PayloadAction<GetSinglePrayer>) {
      const {data} = action.payload;
      for (let key in state) {
        if (state[key].id === data.columnId) {
          state[key].prayers = state[key].prayers.map(prayer => {
            if (prayer.id === data.id) {
              return data;
            } else {
              return prayer;
            }
          });
        }
      }
    },
    addNewPrayerRequest(state, action: PayloadAction<AddNewPrayerRequest>) {},
    addNewPrayer(state, action: PayloadAction<AddNewPrayer>) {
      const {data} = action.payload;
      const pray: Pray = {
        id: data.id,
        title: data.title,
        description: '',
        checked: false,
        columnId: data.columnId,
        comments: [],
      };
      for (let key in state) {
        if (state[key].id === data.columnId) {
          state[key].prayers = state[key].prayers.concat(pray);
        }
      }
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
