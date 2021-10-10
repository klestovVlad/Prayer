import { RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { getCommentsByPrayerId } from '../../../store/comments/selectors';
import { AddNewComment } from './add-new-comment/add-new-comment';
import { Comments } from './comments/comments';
import { Header } from './header/header';
import { LastPrayed } from './last-prayed/LastPrayed';
import { Members } from './members/members';
import { TableInfo } from './table-info/table-Info';

type RootStackParamList = {
  PrayerDetails: {
    title: string;
    prayerId: number;
    columnId: number;
  };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PrayerDetails'>;

type PrayerDetailsProps = {
  route: ProfileScreenRouteProp;
};

export const PrayerDetails: FC<PrayerDetailsProps> = ({ route }) => {
  const comments = useSelector(getCommentsByPrayerId(route.params.prayerId));
  return (
    <Container>
      <Header title={route.params.title} />
      <ScrollView>
        <LastPrayed />
        <TableInfo />
        <Members />
        <Comments comments={comments} />
      </ScrollView>
      <AddNewComment columnId={route.params.columnId} prayerId={route.params.prayerId} />
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
`;
