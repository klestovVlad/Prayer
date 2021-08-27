import React from 'react';
import {PrayerRow} from '../prayer-row/prayer-row';
import {ShowAnsweredButton} from '../show-anwered-button/show-anwered-button';
import {Prayer} from '../../../../store/data/state';
import {useState} from 'react';
import {ScrollView} from 'react-native';

interface MyPrayersProps {
  prayers: Prayer[];
}

export const Subscribed: React.FC<MyPrayersProps> = ({prayers}) => {
  const [showAnswered, setshowAnswered] = useState(true);
  return (
    <ScrollView>
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
