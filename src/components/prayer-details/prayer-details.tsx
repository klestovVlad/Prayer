import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {Header} from './header';
import {LastPrayed} from './LastPrayed';
import {TableInfo} from './table-Info';
import {Members} from './members';
import {Comments} from './comments';
import {AddNewComment} from './addNewComment';

const Container = styled.View`
  height: 100%;
`;

interface PrayerDetailsProps {
  navigation: any;
}

export const PrayerDetails: React.FC<PrayerDetailsProps> = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation} />
      <ScrollView>
        <LastPrayed />
        <TableInfo />
        <Members />
        <Comments />
      </ScrollView>
      <AddNewComment />
    </Container>
  );
};
