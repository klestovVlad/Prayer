import React from 'react';
import {useState} from 'react';
import {AppHeader} from '../header/app-header';
import {TaskBody} from './task-body/task-body';
import {Container} from './styles';
import {RouteProp} from '@react-navigation/native';
import {getPrayersByColumnId} from '../../../store/prayers/selectors';
import {useSelector} from 'react-redux';

type RootStackParamList = {
  Task: {nameHeader: string; name: string; columnId: number};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Task'>;

type TaskProps = {
  route: ProfileScreenRouteProp;
};

export const Task: React.FC<TaskProps> = ({route}) => {
  const prayers = useSelector(getPrayersByColumnId(route.params.columnId));
  console.log('prayers', prayers, route.params.columnId);

  const [NumOfView, setNumOfView] = useState(0);
  return (
    <Container>
      <AppHeader
        headerText={route.params.name}
        type={1}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        onPress={() => null}
        subscribiedNum={Object.keys(prayers).length}
      />
      <TaskBody numOfView={NumOfView} columnId={route.params.columnId} />
    </Container>
  );
};
