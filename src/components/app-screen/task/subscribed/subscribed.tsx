import { useState } from 'react';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { getPrayersByColumnId } from '../../../../store/prayers/selectors';
import { PrayerRow } from '../prayer-row/prayer-row';
import { ShowAnsweredButton } from '../show-answered-button/show-answered-button';

interface MyPrayersProps {
  columnId: number;
}

export const Subscribed: FC<MyPrayersProps> = ({
  columnId,
}: MyPrayersProps) => {
  const [showAnswered, setshowAnswered] = useState(true);
  const prayers = useSelector(getPrayersByColumnId(columnId));
  return (
    <ScrollView>
      {Object.keys(prayers).map(prayerId =>
        !prayers[prayerId].checked ? (
          <PrayerRow prayer={prayers[prayerId]} key={prayers[prayerId].id} />
        ) : null,
      )}
      <ShowAnsweredButton
        setshowAnswered={() => setshowAnswered(!showAnswered)}
        showAnswered={showAnswered}
      />
      {Object.keys(prayers).map(prayerId =>
        prayers[prayerId].checked && showAnswered ? (
          <PrayerRow prayer={prayers[prayerId]} key={prayers[prayerId].id} />
        ) : null,
      )}
    </ScrollView>
  );
};
