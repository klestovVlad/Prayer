import {createSelector} from 'reselect';

import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state;

export const selectUserData = createSelector(selectData, data => data);
