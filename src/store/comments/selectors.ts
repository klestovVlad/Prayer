import {createSelector} from 'reselect';
import {Comment} from '../comments/state';
import {RootState} from '../root-reducer';

const selectData = (state: RootState) => state.commentsReducer;

export const selectCommentData = createSelector(selectData, data =>
  Object.values(data),
);

export const getCommentsByPrayerId = (prayerId: number) =>
  createSelector(selectData, data => {
    let comments: Record<string, Comment> = {};

    for (let key in data) {
      if (data[key].prayerId === prayerId) {
        comments[key] = data[key];
      }
    }

    return Object.values(comments);
  });
