import { useEffect, useState } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectColumnData } from '../../../store/columns/selectors';
import { columnAction } from '../../../store/columns/slice';
import { AppHeader } from '../header/app-header';
import { InputNewTask } from './input-new-task/input-new-task';
import { Container, ScrollView } from './styles';
import { TaskRow } from './task-row/task-row';

export const Desk: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(columnAction.initialStateRequest());
  }, [dispatch]);

  const data = useSelector(selectColumnData);

  const [showInput, setshowInput] = useState(false);

  return (
    <Container>
      <AppHeader
        headerText="My Desc"
        type={0}
        onPress={() => setshowInput(true)}
        NumOfView={0}
        setNumOfView={() => null}
        subscribedNum={0}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
        <InputNewTask showInput={showInput} setshowInput={setshowInput} />
        {Object.keys(data).map((_item, index) => (
          <TaskRow
            key={data[index].id}
            name={data[index].title}
            columnId={data[index].id}
          />
        ))}
      </ScrollView>
    </Container>
  );
};
