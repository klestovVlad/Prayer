import {createSelector} from 'reselect';
import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state.DataReducer;

export const selectStoreData = createSelector(selectData, data => data);
