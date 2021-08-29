// import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
// import {
//   GetPrayers,
//   ChangePraуerRequest,
//   GetSinglePrayer,
//   AddNewPrayerRequest,
//   AddNewPrayer,
//   GetComments,
//   AddNewColumn,
// } from './action-types';
// import {initialState, Columns, Prayer} from './state';

// const stateSlice = createSlice({
//   name: 'boardSlice',
//   initialState,
//   reducers: {
//     columnRequest(state, action: PayloadAction<string>) {},
//     getColumns(state, action: PayloadAction<Columns[]>) {
//       return action.payload.reduce((accum, column) => {
//         accum[column.id] = column;
//         accum[column.id].prayers = [];
//         return accum;
//       }, {});
//     },
//     addNewColumnRequser(state, {payload}: PayloadAction<AddNewColumn>) {
//       console.log('addNewColumnRequser', payload);
//     },
//     addNewColumn(state, action: PayloadAction<Columns>) {
//       const column = action.payload;
//       state[column.id] = column;
//       state[column.id].prayers = [];
//     },
//     deleteColumnRequest(state, action: PayloadAction<number>) {},
//     deleteColumn(state, action) {
//       delete state[action.payload];
//     },
//     prayersRequest() {},
//     getPrayers(state, action: PayloadAction<GetPrayers>) {
//       const {prayersData} = action.payload;
//       prayersData.forEach(prayer => {
//         if (!state[prayer.columnId]) {
//           return;
//         }
//         if (!state[prayer.columnId].prayers) {
//           state[prayer.columnId].prayers = {};
//         }
//         state[prayer.columnId].prayers[prayer.id] = prayer;
//       });
//     },
//     getComments(state, action: PayloadAction<GetComments>) {
//       const {commentsData} = action.payload;
//       commentsData.forEach(comment => {
//         for (let key in state) {
//           if (!state[key].prayers[comment.prayerId]) {
//             return;
//           }
//           console.log(
//             'comment######:',
//             current(state)[key].prayers[comment.prayerId],
//           );
//           if (!state[key].prayers[comment.prayerId].comments) {
//             state[key].prayers[comment.prayerId].comments = [];
//           }
//           state[key].prayers[comment.prayerId].comments.push(comment);
//         }
//       });
//     },
//     changePraуerRequest(state, action: PayloadAction<ChangePraуerRequest>) {},
//     getSinglePrayer(state, action: PayloadAction<GetSinglePrayer>) {
//       const {data} = action.payload;
//       state[data.columnId].prayers[data.id] = data;
//     },
//     addNewPrayerRequest(state, action: PayloadAction<AddNewPrayerRequest>) {},
//     addNewPrayer(state, action: PayloadAction<AddNewPrayer>) {
//       const {data} = action.payload;
//       const prayer: Prayer = {
//         id: data.id,
//         title: data.title,
//         description: data.description,
//         checked: data.checked,
//         columnId: data.columnId,
//         comments: [],
//       };
//       for (let key in state) {
//         if (state[key].id === data.columnId) {
//           if (!state[key].prayers) {
//             state[key].prayers = {};
//           }
//           state[key].prayers[prayer.id] = prayer;
//         }
//       }
//     },
//     deletePrayerRequest(state, {payload}: PayloadAction<number>) {
//       console.log('deletePrayerRequest', payload);
//     },
//     deletePrayer(state, {payload}: PayloadAction<number>) {
//       for (let key in state) {
//         if (payload in state[key].prayers) {
//           delete state[key].prayers[payload];
//         }
//       }
//     },
//   },
// });

// export default stateSlice.reducer;
// export const stateAction = stateSlice.actions;
