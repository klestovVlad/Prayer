import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AddNewComment, addNewCommentRequest} from './action-types';
import {Comment, initialState} from './state';

const stateSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    commentRequest(state, {payload}: PayloadAction<string>) {},
    setComments(state, {payload}: PayloadAction<Comment[]>) {
      return payload.reduce((accum: Record<string, Comment>, prayer) => {
        accum[prayer.id] = prayer;
        return accum;
      }, {});
    },
    addNewCommentRequest(
      state,
      {payload}: PayloadAction<addNewCommentRequest>, // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {},
    addNewComment(state, {payload}: PayloadAction<AddNewComment>) {
      const newComment = {
        body: payload.body,
        created: payload.created,
        id: payload.id,
        prayerId: payload.prayerId,
        userId: payload.user.id,
      };

      state[payload.id] = newComment;
    },
    deleteCommentRequest(state, {payload}: PayloadAction<number>) {},
    deleteComment(state, {payload}: PayloadAction<number>) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const commentsAction = stateSlice.actions;
