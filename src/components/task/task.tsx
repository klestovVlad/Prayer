import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {AppHeader} from '../Header/AppHeader';
import { InputNewPrayer } from './input-new-prayer/inputNewPrayer';
import { PrayerRow } from './prayer-row';

const Container = styled.View`
  height: 100%;
  background-color: white;
`;


export const Task: React.FC<any> = ({navigation, route}) => {
  return (
    <Container>
      <AppHeader headerText="To do" tubsVisibility={true} />
      <InputNewPrayer />
      <PrayerRow />
    </Container>
  );
};
