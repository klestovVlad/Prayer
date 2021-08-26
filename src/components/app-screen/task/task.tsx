import React from 'react';
import {useState} from 'react';
import {AppHeader} from '../header/app-header';
import {TaskBody} from './task-body/task-body';
import {Container} from './styles';
import {RouteProp} from '@react-navigation/native';
import {Pray} from '../../../store/data/state';

type RootStackParamList = {
  Task: {nameHeader: string; name: string; prayers: Pray[]; columnId: number};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Task'>;

type TaskProps = {
  route: ProfileScreenRouteProp;
};

export const Task: React.FC<TaskProps> = ({route}) => {
  const [NumOfView, setNumOfView] = useState(0);
  return (
    <Container>
      <AppHeader
        headerText={route.params.name}
        type={1}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        onPress={() => null}
        subscribiedNum={route.params.prayers.length}
      />
      <TaskBody
        numOfView={NumOfView}
        prayers={route.params.prayers}
        columnId={route.params.columnId}
      />
    </Container>
  );
};
