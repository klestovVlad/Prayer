import React, {useEffect} from 'react';
import {TaskRow} from './task-row/task-row';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../header/app-header';
import {InputNewTask} from './input-new-task/inputNewTask';
import {useState} from 'react';
import {Container, ScrollView} from './styles';
import {stateAction} from '../../../store/data/slice';
import {selectUserData} from '../../../store/user/selectors';
import {selectStoreData} from '../../../store/data/selectors';

export const Desk: React.FC<any> = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  useEffect(() => {
    dispatch(stateAction.columnRequest(user.token));
  }, [dispatch, user.token]);

  const data = useSelector(selectStoreData);
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
      <ScrollView contentContainerStyle={{paddingBottom: 15}}>
        <InputNewTask showInput={showInput} setshowInput={setshowInput} />
        {data.map(item => (
          <TaskRow
            key={item.id}
            name={item.title}
            prayers={item.prayers}
            columnId={item.id}
          />
        ))}
      </ScrollView>
    </Container>
  );
};
