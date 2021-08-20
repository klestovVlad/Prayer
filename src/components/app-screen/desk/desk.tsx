import React from 'react';
import {TaskRow} from './task-row/task-row';
import {useDispatch, useSelector} from 'react-redux';
import {Board} from '../../../store/data/state';
import {AppHeader} from '../header/app-header';
import {InputNewTask} from './input-new-task/inputNewTask';
import {useState} from 'react';
import {Container} from './styles';

export const Desk: React.FC<any> = () => {
  const data = useSelector((state: Board) => state);
  const [showInput, setshowInput] = useState(false);
  return (
    <Container>
      <AppHeader
        headerText={'My Desc'}
        type={0}
        onPress={() => setshowInput(true)}
        NumOfView={0}
        setNumOfView={() => null}
      />
      <InputNewTask showInput={showInput} setshowInput={setshowInput} />
      {Object.keys(data).map(item => (
        <TaskRow key={data[item].id} name={data[item].columnName} />
      ))}
    </Container>
  );
};
