import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState, Comment} from './state';

const stateSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    commentRequest(state, {payload}: PayloadAction<string>) {
      console.log(payload);
    },
    getComments(state, {payload}: PayloadAction<Comment[]>) {
      return payload.reduce((accum: Record<string, Comment>, prayer) => {
        accum[prayer.id] = prayer;
        return accum;
      }, {});
    },
  },
});

export default stateSlice.reducer;
export const commentsAction = stateSlice.actions;
