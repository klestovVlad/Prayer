import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TaskContent, TaskText} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Task: {
    name: string;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>;

type TaskProps = {
  name: string;
};

export const TaskRow: React.FC<TaskProps> = ({name}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TaskContent onPress={() => navigation.navigate('Task', {name: name})}>
      <TaskText>{name}</TaskText>
    </TaskContent>
  );
};
