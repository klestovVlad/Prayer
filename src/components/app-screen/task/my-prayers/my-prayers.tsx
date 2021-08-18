import React from 'react';
import {InputNewPrayer} from '../input-new-prayer/input-mew-prayer';
import {PrayerRow} from '../prayer-row/prayer-row';
import {ShowAnsweredButton} from '../show-anwered-button/show-anwered-button';

interface MyPrayersProps {
  navigation: any;
}

export const MyPrayers: React.FC<MyPrayersProps> = ({navigation}) => {
  return (
    <>
      <InputNewPrayer />
      <PrayerRow navigation={navigation} />
      <ShowAnsweredButton />
    </>
  );
};
