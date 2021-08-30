import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState, Comment} from './state';
import {AddNewComment, addNewCommentRequest} from './action-types';

const stateSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    commentRequest(state, {payload}: PayloadAction<string>) {
      console.log(payload);
    },
    setComments(state, {payload}: PayloadAction<Comment[]>) {
      return payload.reduce((accum: Record<string, Comment>, prayer) => {
        accum[prayer.id] = prayer;
        return accum;
      }, {});
    },
    addNewCommentRequest(
      state,
      {payload}: PayloadAction<addNewCommentRequest>,
    ) {
      console.log(payload);
    },
    addNewComment(state, {payload}: PayloadAction<AddNewComment>) {
      const newComment = {
        body: payload.body,
        created: payload.created,
        id: payload.id,
        prayerId: payload.prayerId,
        userId: payload.user.id,
      };

      console.log('newComment: ', newComment);

      state[payload.id] = newComment;
    },
    deleteCommentRequest(state, {payload}: PayloadAction<number>) {
      console.log(payload);
    },
    deleteComment(state, {payload}: PayloadAction<number>) {
      delete state[payload];
    },
  },
});

export default stateSlice.reducer;
export const commentsAction = stateSlice.actions;
