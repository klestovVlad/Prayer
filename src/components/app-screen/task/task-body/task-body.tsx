import { FC } from 'react';

import { MyPrayers } from '../my-prayers/my-prayers';
import { Subscribed } from '../subscribed/subscribed';

interface TaskBodyProps {
  numOfView: number;
  columnId: number;
}

export const TaskBody: FC<TaskBodyProps> = ({ numOfView, columnId }) => {
  switch (numOfView) {
    case 0:
      return <MyPrayers columnId={columnId} />;
    case 1:
      return <Subscribed columnId={columnId} />;
    default:
      return <MyPrayers columnId={columnId} />;
  }
};
