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
    columnRequest() {
      console.log('column request');
    },
    getColumns(state, action: PayloadAction<Columns[]>) {
      console.log('Action get columns', action);
      action.payload.map(column => {
        column.prayers = [];
      });
      return action.payload;
    },
    prayersRequest() {},
    getPrayers(state, action: PayloadAction<GetPrayers>) {
      const {prayersData} = action.payload;
      return state.map(column => {
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
    getComments(state, action: PayloadAction<GetComments>) {
      const {commentsData} = action.payload;
      console.log(commentsData);
    },
    changePraуerRequest(state, action: PayloadAction<ChangePraуerRequest>) {
      console.log('changePraуerRequest', action);
    },
    getSinglePrayer(state, action: PayloadAction<GetSinglePrayer>) {
      const {data} = action.payload;
      console.log('det single Prayer', data);
      return state.map(columns => {
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
      const {data} = action.payload;
      console.log(data);
      const pray: Pray = {
        id: data.id,
        title: data.title,
        description: '',
        checked: false,
        columnId: data.columnId,
        comments: [],
      };
      return state.map(columns => {
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
