import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const VerticalLine = styled.View`
  background-color: ${(props) => props.theme.colors.red};
  height: 100%;
  width: 3px;
  border-radius: 3px;
`;

export const Text = styled.Text`
  margin-left: 15px;
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.dark};
`;
