import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetPrayers,
  ChangePraуerRequest,
  GetSinglePrayer,
  AddNewPrayerRequest,
  AddNewPrayer,
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
      state = action.payload;
      return state;
    },
    prayersRequest() {},
    getPrayers(state, action: PayloadAction<GetPrayers>) {
      const {data, prayersData} = action.payload;
      return data.map(column => {
        const foundPrays: Pray[] = [];
        prayersData.forEach(pray => {
          pray.columnId === column.id ? foundPrays.push(pray) : null;
        });
        if (foundPrays.length > 0) {
          return {...column, prayers: column.prayers.concat(foundPrays)};
        } else {
          return column;
        }
      });
    },
    changePraуerRequest(state, action: PayloadAction<ChangePraуerRequest>) {
      console.log('changePraуerRequest', action);
    },
    getSinglePrayer(state, action: PayloadAction<GetSinglePrayer>) {
      const {store, data} = action.payload;
      console.log('det single Prayer', data);
      return store.map(columns => {
        if (columns.id === data.columnId) {
          return {
            ...columns,
            prayers: columns.prayers.map(prayer => {
              if (prayer.id === data.id) {
                console.log('ret', data);
                return data;
              } else {
                return prayer;
              }
            }),
          };
        } else {
          return columns;
        }
      });
    },
    addNewPrayerRequest(state, action: PayloadAction<AddNewPrayerRequest>) {
      console.log(action);
    },
    addNewPrayer(state, action: PayloadAction<AddNewPrayer>) {
      const {data, store} = action.payload;
      console.log(data);
      const pray: Pray = {
        id: data.id,
        title: data.title,
        description: '',
        checked: false,
        columnId: data.columnId,
        commentsIds: [],
      };
      return store.map(columns => {
        if (columns.id === data.columnId) {
          return {...columns, prayers: columns.prayers.concat(pray)};
        } else {
          return columns;
        }
      });
    },
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;
