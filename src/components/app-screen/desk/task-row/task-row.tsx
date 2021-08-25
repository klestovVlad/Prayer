import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TaskContent, TaskText} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pray} from '../../../../store/data/state';

type RootStackParamList = {
  Task: {
    name: string;
    prayers: Pray[];
    columnId: number;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>;

type TaskProps = {
  name: string;
  prayers: Pray[];
  columnId: number;
};

export const TaskRow: React.FC<TaskProps> = ({name, prayers, columnId}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TaskContent
      onPress={() =>
        navigation.navigate('Task', {
          name: name,
          prayers: prayers,
          columnId: columnId,
        })
      }>
      <TaskText>{name}</TaskText>
    </TaskContent>
  );
};
