import styled from 'styled-components/native';
import {colors} from '../../../../style/colors';

const TaskContent = styled.TouchableOpacity`
  padding: 20px 15px;
  margin: 15px 15px 0 15px;
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  background-color: ${colors.white};
`;

const TaskText = styled.Text`
  font-size: 17px;
  color: #514d47;
`;

export {TaskContent, TaskText};
