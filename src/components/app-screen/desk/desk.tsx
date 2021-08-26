import React, {useEffect} from 'react';
import {TaskRow} from './task-row/task-row';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../header/app-header';
import {InputNewTask} from './input-new-task/inputNewTask';
import {useState} from 'react';
import {Container, ScrollView} from './styles';
import {stateAction} from '../../../store/data/index';
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
  console.log(data);
  return (
    <Container>
      <AppHeader
        headerText={'My Desc'}
        type={0}
        onPress={() => setshowInput(true)}
        NumOfView={0}
        setNumOfView={() => null}
        subscribiedNum={0}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 15}}>
        <InputNewTask showInput={showInput} setshowInput={setshowInput} />
        {Object.keys(data).map((item, index) => (
          <TaskRow
            key={data[index].id}
            name={data[index].title}
            prayers={data[index].prayers}
            columnId={data[index].id}
          />
        ))}
      </ScrollView>
    </Container>
  );
};
