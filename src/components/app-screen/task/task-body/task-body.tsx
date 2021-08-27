import React from 'react';
import {MyPrayers} from '../my-prayers/my-prayers';
import {Subscribed} from '../subcribed/subscribed';
import {Prayer} from '../../../../store/data/state';

interface TaskBodyProps {
  numOfView: number;
  prayers: Prayer[];
  columnId: number;
}

export const TaskBody: React.FC<TaskBodyProps> = ({
  numOfView,
  prayers,
  columnId,
}) => {
  switch (numOfView) {
    case 0:
      return <MyPrayers prayers={prayers} columnId={columnId} />;
    case 1:
      return <Subscribed prayers={prayers} />;
    default:
      return <MyPrayers prayers={prayers} columnId={columnId} />;
  }
};
