import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetPrayers,
  ChangePraуerRequest,
  GetSinglePrayer,
  AddNewPrayerRequest,
  AddNewPrayer,
  GetComments,
  AddNewColumn,
} from './action-types';
import {initialState, Columns, Prayer} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    columnRequest(state, action: PayloadAction<string>) {},
    getColumns(state, action: PayloadAction<Columns[]>) {
      action.payload.map(column => {
        column.prayers = [];
      });
      return {...action.payload};
    },
    prayersRequest() {},
    getPrayers(state, action: PayloadAction<GetPrayers>) {
      const {prayersData} = action.payload;
      for (let key in state) {
        const foundPrays: Prayer[] = [];
        prayersData.forEach(prayer => {
          prayer.columnId === state[key].id ? foundPrays.push(prayer) : null;
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
      const prayer: Prayer = {
        id: data.id,
        title: data.title,
        description: '',
        checked: false,
        columnId: data.columnId,
        comments: [],
      };
      for (let key in state) {
        if (state[key].id === data.columnId) {
          state[key].prayers = state[key].prayers.concat(prayer);
        }
      }
    },
    addNewColumnRequser(state, {payload}: PayloadAction<AddNewColumn>) {
      console.log('addNewColumnRequser', payload);
    },
    addNewColumn(state, action: PayloadAction<Columns>) {
      const column = action.payload;
      column.prayers = [];
      state[Object.keys(state).length] = column;
      return state;
    },
    deleteColumnRequest(state, action: PayloadAction<number>) {},
    deleteColumn(state, action) {
      const columnId = action.payload;
      for (let key in state) {
        if (state[key].id === columnId) {
          delete state[+key];
        }
      }
    },
    deletePrayerRequest(state, {payload}: PayloadAction<number>) {
      console.log('deletePrayerRequest', payload);
    },
    deletePrayer(state, {payload}: PayloadAction<number>) {
      console.log('deletePrayer id№', payload);
      const deletePrayerId = payload;
      for (let key in state) {
        state[key].prayers.forEach((item, i) => {
          if (item.id === deletePrayerId) {
            state[key].prayers.splice(i, 1);
          }
        });
      }
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
