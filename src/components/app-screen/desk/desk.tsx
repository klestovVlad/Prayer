import React, {useEffect} from 'react';
import {TaskRow} from './task-row/task-row';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../header/app-header';
import {InputNewTask} from './input-new-task/inputNewTask';
import {useState} from 'react';
import {Container} from './styles';
import {stateAction} from '../../../store/data/slice';

export const Desk: React.FC<any> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stateAction.columnRequest());
  }, []);

  const data = useSelector((state) => state.DataReducer);
  console.log('data desk: ', data);

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
        <TaskRow key={data[item].id} name={data[item].title} />
      ))}
    </Container>
  );
};
