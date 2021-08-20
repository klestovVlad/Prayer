import React from 'react';
import {useState} from 'react';
import {AppHeader} from '../header/app-header';
import {TaskBody} from './task-body/task-body';
import {Container} from './styles';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Task: {nameHeader: string; name: string};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Task'>;

type TaskProps = {
  route: ProfileScreenRouteProp;
};

export const Task: React.FC<TaskProps> = ({route}) => {
  console.log('task name: ', route.params.name);
  const [NumOfView, setNumOfView] = useState(0);
  return (
    <Container>
      <AppHeader
        headerText={route.params.name}
        type={1}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        onPress={() => null}
      />
      <TaskBody NumOfView={NumOfView} />
    </Container>
  );
};
