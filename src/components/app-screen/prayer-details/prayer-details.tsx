import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {Header} from './header/header';
import {LastPrayed} from './last-prayed/LastPrayed';
import {TableInfo} from './table-info/table-Info';
import {Members} from './members/members';
import {Comments} from './comments/comments';
import {AddNewComment} from './add-new-comment/add-new-comment';
import {RouteProp} from '@react-navigation/native';
import {Comment} from '../../../store/data/state';

type RootStackParamList = {
  PrayerDetails: {title: string; comments: Comment[]};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PrayerDetails'>;

type PrayerDetailsProps = {
  route: ProfileScreenRouteProp;
};

const Container = styled.View`
  height: 100%;
`;

export const PrayerDetails: React.FC<PrayerDetailsProps> = ({route}) => {
  return (
    <Container>
      <Header title={route.params.title} />
      <ScrollView>
        <LastPrayed />
        <TableInfo />
        <Members />
        <Comments comments={route.params.comments} />
      </ScrollView>
      <AddNewComment />
    </Container>
  );
};
