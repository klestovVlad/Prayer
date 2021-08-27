import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TaskContent, TaskText} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Prayer} from '../../../../store/data/state';
import {useState} from 'react';
import {TaskRowButtons} from './task-row-buttons/task-row-buttons';

type RootStackParamList = {
  Task: {
    name: string;
    prayers: Prayer[];
    columnId: number;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>;

type TaskRowProps = {
  name: string;
  prayers: Prayer[];
  columnId: number;
};

export const TaskRow: React.FC<TaskRowProps> = ({name, prayers, columnId}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [wrappedUp, setwrappedUp] = useState(false);
  return (
    <TaskContent
      onPress={() =>
        navigation.navigate('Task', {
          name: name,
          prayers: prayers,
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
