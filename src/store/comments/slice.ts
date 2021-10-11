import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddNewComment } from './state';
import { Comment, initialState } from './state';

const stateSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    setCommentsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setComments(state, { payload }: PayloadAction<Comment[]>) {
      state.data = payload.reduce((accum: Record<string, Comment>, prayer) => {
        accum[prayer.id] = prayer;
        return accum;
      }, {});
      state.isError = false;
      state.errors = [];
    },
    addNewComment(state, { payload }: PayloadAction<AddNewComment>) {
      const newComment = {
        body: payload.body,
        created: payload.created,
        id: payload.id,
        prayerId: payload.prayerId,
        userId: payload.user.id,
      };

      state.data[payload.id] = newComment;
    },
    deleteComment(state, { payload }: PayloadAction<number>) {
      delete state.data[payload];
    },
    setCommentsError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default stateSlice.reducer;
export const commentsAction = stateSlice.actions;
