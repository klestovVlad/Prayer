import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TaskContent, TaskText} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {TaskRowButtons} from './task-row-buttons/task-row-buttons';

type RootStackParamList = {
  Task: {
    name: string;
    columnId: number;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>;

type TaskRowProps = {
  name: string;
  columnId: number;
};

export const TaskRow: React.FC<TaskRowProps> = ({name, columnId}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [wrappedUp, setwrappedUp] = useState(false);
  return (
    <TaskContent
      onPress={() =>
        navigation.navigate('Task', {
          name: name,
          columnId: columnId,
        })
      }
      onLongPress={() => setwrappedUp(!wrappedUp)}>
      <TaskText>{name}</TaskText>
      <TaskRowButtons
        setwrappedUp={() => setwrappedUp(!wrappedUp)}
        visible={wrappedUp}
        columnId={columnId}
      />
    </TaskContent>
  );
};
