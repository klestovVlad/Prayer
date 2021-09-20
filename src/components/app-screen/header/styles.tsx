import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #ffffff;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.Text`
  color: #514d47;
  font-size: 17px;
  height: 64px;
  align-self: center;
  line-height: 64px;
`;

export const AddTaskButton = styled.View`
  position: absolute;
  right: 15px;
  height: 64px;
  top: 0;
  display: flex;
  justify-content: center;
`;
