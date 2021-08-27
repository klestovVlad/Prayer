import React from 'react';
import {InputNewPrayer} from '../input-new-prayer/input-mew-prayer';
import {PrayerRow} from '../prayer-row/prayer-row';
import {ShowAnsweredButton} from '../show-anwered-button/show-anwered-button';
import {Prayer} from '../../../../store/data/state';
import {useState} from 'react';
import {ScrollView} from 'react-native';

interface MyPrayersProps {
  prayers: Prayer[];
  columnId: number;
}

export const MyPrayers: React.FC<MyPrayersProps> = ({prayers, columnId}) => {
  const [showAnswered, setshowAnswered] = useState(true);
  return (
    <ScrollView>
      <InputNewPrayer columnId={columnId} />
      {prayers.map(item =>
        !item.checked ? <PrayerRow prayer={item} key={item.id} /> : null,
      )}
      <ShowAnsweredButton
        setshowAnswered={() => setshowAnswered(!showAnswered)}
        showAnswered={showAnswered}
      />
      {prayers.map(item =>
        item.checked && showAnswered ? (
          <PrayerRow prayer={item} key={item.id} />
        ) : null,
      )}
    </ScrollView>
  );
};
