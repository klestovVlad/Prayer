import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {Header} from './header/header';
import {LastPrayed} from './last-prayed/LastPrayed';
import {TableInfo} from './table-info/table-Info';
import {Members} from './members/members';
import {Comments} from './comments/comments';
import {AddNewComment} from './add-new-comment/add-new-comment';

const Container = styled.View`
  height: 100%;
`;

export const PrayerDetails: React.FC = () => {
  return (
    <Container>
      <Header />
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
