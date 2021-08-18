import React from 'react';
import {MyPrayers} from '../my-prayers/my-prayers';
import {Subscribed} from '../subcribed/subscribed';

interface TaskBodyProps {
  NumOfView: number;
}

export const TaskBody: React.FC<TaskBodyProps> = ({NumOfView}) => {
  switch (NumOfView) {
    case 0:
      return <MyPrayers />;
    case 1:
      return <Subscribed />;
    default:
      return <MyPrayers />;
  }
};
