import React from 'react';
import {MyPrayers} from '../my-prayers/my-prayers';
import {Subscribed} from '../subcribed/subscribed';
import {Pray} from '../../../../store/data/state';

interface TaskBodyProps {
  numOfView: number;
  prayers: Pray[];
}

export const TaskBody: React.FC<TaskBodyProps> = ({numOfView, prayers}) => {
  switch (numOfView) {
    case 0:
      return <MyPrayers prayers={prayers} />;
    case 1:
      return <Subscribed prayers={prayers} />;
    default:
      return <MyPrayers prayers={prayers} />;
  }
};
