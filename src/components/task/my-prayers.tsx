import React from 'react';
import {InputNewPrayer} from './input-new-prayer/inputNewPrayer';
import {PrayerRow} from './prayer-row';
import {ShowAnsweredButton} from './show-anwered-button';

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
