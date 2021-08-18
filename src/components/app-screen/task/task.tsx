import React from 'react';
import {useState} from 'react';
import {AppHeader} from '../header/app-header';
import {TaskBody} from './task-body/task-body';
import {Container} from './styles';

export const Task: React.FC<any> = ({navigation}) => {
  const [NumOfView, setNumOfView] = useState(0);
  return (
    <Container>
      <AppHeader
        headerText="To do"
        type={1}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        onPress={() => null}
      />
      <TaskBody NumOfView={NumOfView} navigation={navigation} />
    </Container>
  );
};
