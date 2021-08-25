import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetPrayers, ChangePraуerRequest, GetSinglePrayer} from './action-types';
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
      console.log(action);
    },
    getSinglePrayer(state, action: PayloadAction<GetSinglePrayer>) {
      const {store, data} = action.payload;
      return store.map(columns => {
        if (columns.id === data.columnId) {
          return {
            ...columns,
            prayers: columns.prayers.map(prayer => {
              if (prayer.id === data.id) {
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
  },
});

export default stateSlice.reducer;
export const stateAction = stateSlice.actions;

// toglePrayChek(state, action: PayloadAction<ToglePrayChek>) {
//   const {data, pray} = action.payload;
//   return data.map(column => {
//     if (pray.columnId === column.id) {
//       return {
//         ...column,
//         prayers: column.prayers.map(columnPray => {
//           if (columnPray.id === pray.id) {
//             const newState = {...columnPray, checked: !columnPray.checked};
//             console.log('columnPray', newState);
//             return newState;
//           } else {
//             return columnPray;
//           }
//         }),
//       };
//     } else {
//       return column;
//     }
//   });
// },
