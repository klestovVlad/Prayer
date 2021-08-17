import React, {useEffect} from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import {AppHeader} from '../Header/AppHeader';
import {TaskBody} from './taskBody';

const Container = styled.View`
  height: 100%;
  background-color: white;
`;

export const Task: React.FC<any> = ({navigation, route}) => {
  const [NumOfView, setNumOfView] = useState(0);
  return (
    <Container>
      <AppHeader
        headerText="To do"
        tubsVisibility={true}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
      />
      <TaskBody NumOfView={NumOfView} navigation={navigation} />
    </Container>
  );
};
