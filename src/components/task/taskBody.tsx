import React from 'react';
import {MyPrayers} from './my-prayers';
import {Subscribed} from './subscribed';

interface TaskBodyProps {
  NumOfView: number;
  navigation: any;
}

export const TaskBody: React.FC<TaskBodyProps> = ({NumOfView, navigation}) => {
  switch (NumOfView) {
    case 0:
      return <MyPrayers navigation={navigation} />;
    case 1:
      return <Subscribed />;
    default:
      return <MyPrayers navigation={navigation} />;
  }
};
