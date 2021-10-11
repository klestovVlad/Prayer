import { createAction } from '@reduxjs/toolkit';

import { PrayersActionTypes } from './action-types';
import { AddNewPrayerRequest, ChangePrayerRequest } from './state';

export const getPrayersAction = createAction(PrayersActionTypes.GET_PRAYERS);

export const changePrayerAction = createAction<ChangePrayerRequest>(
  PrayersActionTypes.CHANGE_PRAYER,
);

export const addNewPrayerAction = createAction<AddNewPrayerRequest>(
  PrayersActionTypes.ADD_NEW_PRAYER,
);

export const deletePrayerAction = createAction<number>(PrayersActionTypes.DELETE_PRAYER);
