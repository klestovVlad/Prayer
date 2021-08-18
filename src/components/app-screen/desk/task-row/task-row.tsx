import React from 'react';
import {TaskContent, TaskText} from './styles';

interface TaskProps {
  name: string;
  navigation: any;
}

export const TaskRow: React.FC<TaskProps> = ({name, navigation}) => {
  return (
    <TaskContent onPress={() => navigation.navigate('Task')}>
      <TaskText>{name}</TaskText>
    </TaskContent>
  );
};
