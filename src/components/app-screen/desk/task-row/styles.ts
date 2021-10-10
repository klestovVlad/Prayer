import styled from 'styled-components/native';

export const TaskContent = styled.TouchableOpacity`
  padding: 20px 15px;
  margin: 15px 15px 0 15px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const TaskText = styled.Text`
  font-size: 17px;
  color: #514d47;
`;
