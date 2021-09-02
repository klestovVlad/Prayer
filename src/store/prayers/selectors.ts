import {createSelector} from 'reselect';

import {RootState} from '../root-reducer';
import {Prayer} from './state';

const selectData = (state: RootState) => state.prayersReducer;

export const selectPrayerData = createSelector(selectData, data =>
  Object.values(data),
);

export const getPrayersByColumnId = (columnId: number) =>
  createSelector(selectData, data => {
    const prayers: Record<string, Prayer> = {};

    for (const key in data) {
      if (data[key].columnId === columnId) {
        prayers[key] = data[key];
      }
    }

    return prayers;
  });
