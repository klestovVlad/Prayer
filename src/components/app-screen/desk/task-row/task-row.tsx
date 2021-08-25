import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TaskContent, TaskText} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pray} from '../../../../store/data/state';

type RootStackParamList = {
  Task: {
    name: string;
    prayers: Pray[];
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>;

type TaskProps = {
  name: string;
  prayers: Pray[];
};

export const TaskRow: React.FC<TaskProps> = ({name, prayers}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TaskContent
      onPress={() =>
        navigation.navigate('Task', {name: name, prayers: prayers})
      }>
      <TaskText>{name}</TaskText>
    </TaskContent>
  );
};
