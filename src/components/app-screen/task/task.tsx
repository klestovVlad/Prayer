import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getPrayersByColumnId } from '../../../store/prayers/selectors';
import { AppHeader } from '../header/app-header';
import { LogoutPopup } from './logout-popup/logout-popup';
import { Container } from './styles';
import { TaskBody } from './task-body/task-body';

type RootStackParamList = {
  Task: { nameHeader: string; name: string; columnId: number };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Task'>;

type TaskProps = {
  route: ProfileScreenRouteProp;
};

export const Task: React.FC<TaskProps> = ({ route }: TaskProps) => {
  const prayers = useSelector(getPrayersByColumnId(route.params.columnId));
  const [NumOfView, setNumOfView] = useState(0);
  const [stateLogoutPopup, setstateLogoutPopup] = useState(false);
  return (
    <Container>
      <AppHeader
        headerText={route.params.name}
        type={1}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        onPress={() => setstateLogoutPopup(true)}
        subscribedNum={Object.keys(prayers).length}
      />
      <TaskBody numOfView={NumOfView} columnId={route.params.columnId} />
      <LogoutPopup
        isShown={stateLogoutPopup}
        setstateLogoutPopup={setstateLogoutPopup}
      />
    </Container>
  );
};
