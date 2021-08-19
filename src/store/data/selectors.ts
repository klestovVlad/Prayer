import {createSelector} from 'reselect';
import {Board} from './state';

const selectData = (state: Board) => state;

export const selectStoreData = createSelector(selectData, data => data);
