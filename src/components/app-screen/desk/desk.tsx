import React, {useEffect, useState} from 'react';
import {TaskRow} from './task-row/task-row';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../header/app-header';
import {InputNewTask} from './input-new-task/inputNewTask';
import {Container, ScrollView} from './styles';

import {columnAction} from '../../../store/columns/slice';
import {prayerAction} from '../../../store/prayers/slice';
import {commentsAction} from '../../../store/comments/slice';

import {selectUserData} from '../../../store/user/selectors';
import {selectColumnData} from '../../../store/columns/selectors';

export const Desk: React.FC<any> = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  useEffect(() => {
    dispatch(columnAction.columnRequest(user.token));
    dispatch(prayerAction.prayersRequest(user.token));
    dispatch(commentsAction.commentRequest(user.token));
  }, [dispatch, user.token]);

  const data = useSelector(selectColumnData);

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
            columnId={data[index].id}
          />
        ))}
      </ScrollView>
    </Container>
  );
};
