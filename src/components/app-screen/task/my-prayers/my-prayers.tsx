import React from 'react';
import {InputNewPrayer} from '../input-new-prayer/input-mew-prayer';
import {PrayerRow} from '../prayer-row/prayer-row';
import {ShowAnsweredButton} from '../show-anwered-button/show-anwered-button';
import {Pray} from '../../../../store/data/state';
import {useState} from 'react';

interface MyPrayersProps {
  prayers: Pray[];
}

export const MyPrayers: React.FC<MyPrayersProps> = ({prayers}) => {
  const [showAnswered, setshowAnswered] = useState(true);
  return (
    <>
      <InputNewPrayer />
      {prayers.map(item =>
        !item.checked ? <PrayerRow pray={item} key={item.id} /> : null,
      )}
      <ShowAnsweredButton
        setshowAnswered={() => setshowAnswered(!showAnswered)}
      />
      {prayers.map(item =>
        item.checked && showAnswered ? (
          <PrayerRow pray={item} key={item.id} />
        ) : null,
      )}
    </>
  );
};
