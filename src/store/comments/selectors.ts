import {createSelector} from 'reselect';

import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state.commentsReducer;

export const selectCommentData = createSelector(selectData, data =>
  Object.values(data),
);

export const getCommentsByPrayerId = (prayerId: number) =>
  createSelector(selectData, data => {
    return Object.values(data).filter(item => item.prayerId === prayerId);
  });
