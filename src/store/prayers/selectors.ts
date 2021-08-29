import {createSelector} from 'reselect';
import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state.prayersReducer;

export const selectPrayerData = createSelector(selectData, data =>
  Object.values(data),
);
