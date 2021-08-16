import React from 'react';
import styled from 'styled-components/native';

const TaskContent = styled.TouchableOpacity`
  padding: 20px 15px;
  margin: 15px 15px 0 15px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #ffffff;
`;

const TaskText = styled.Text`
  font-size: 17px;
  color: #514d47;
`;

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
