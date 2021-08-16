import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {TaskRow} from './task-row/task-row';
import {useSelector} from 'react-redux';
import {Board} from '../../store/state';
import {AppHeader} from '../Header/AppHeader';
import {InputNewTask} from './inputNewTask';
import {useState} from 'react';

const Container = styled.View`
  height: 100%;
  background-color: white;
`;

export const Desc: React.FC<any> = ({navigation}) => {
  const data = useSelector((state: Board) => state);
  const [showInput, setshowInput] = useState(false);
  return (
    <Container>
      <AppHeader
        headerText={'My Desc'}
        tubsVisibility={false}
        onPress={() => setshowInput(true)}
      />
      <InputNewTask showInput={showInput} setshowInput={setshowInput} />
      {Object.keys(data).map(item => (
        <TaskRow
          key={data[item].id}
          name={data[item].columnName}
          navigation={navigation}
        />
      ))}
    </Container>
  );
};
