import {createSelector} from 'reselect';

import {RootState} from '../root-reducer';

const selectUser = (state: RootState) => state.UserReduser;
export const selectUserData = createSelector(selectUser, data => data);
