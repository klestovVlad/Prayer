import React from 'react';
import {ScrollView} from 'react-native';
import {Header} from './header';
import {LastPrayed} from './LastPrayed';
import {TableInfo} from './table-Info';
import {Members} from './members';

export const PrayerDetails: React.FC = () => {
  return (
    <ScrollView>
      <Header />
      <LastPrayed />
      <TableInfo />
      <Members />
    </ScrollView>
  );
};
