import { createAction } from '@reduxjs/toolkit';

import { CommentsActionTypes } from './action-types';
import { addNewCommentRequest } from './state';

export const getCommentsAction = createAction(CommentsActionTypes.GET_COMMENTS);

export const addNewCommentAction = createAction<addNewCommentRequest>(
  CommentsActionTypes.ADD_NEW_COMMENT,
);

export const deleteCommentAction = createAction<number>(
  CommentsActionTypes.DELETE_COMMENTS,
);
