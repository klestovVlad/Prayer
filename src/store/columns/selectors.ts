import {createSelector} from 'reselect';

import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state.columnsReducer;

export const selectColumnData = createSelector(selectData, data =>
  Object.values(data),
);
