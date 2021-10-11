import { createAction } from '@reduxjs/toolkit';

import { ColumnsActionTypes } from './action-types';
import { AddNewColumn } from './state';

export const getInitialStateAction = createAction(ColumnsActionTypes.GET_INITIAL_STATE);

export const getColumnsAction = createAction(ColumnsActionTypes.GET_COLUMNS);

export const addNewColumnAction = createAction<AddNewColumn>(
  ColumnsActionTypes.ADD_NEW_COLUMN,
);

export const deleteColumnAction = createAction<number>(ColumnsActionTypes.DELETE_COLUMN);
