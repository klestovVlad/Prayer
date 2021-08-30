import styled from 'styled-components/native';

const Container = styled.View`
  padding: 23px 15px;
  background-color: ${props => props.theme.colors.brown};
`;

const IconRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity``;

const Text = styled.Text`
  margin-top: 21px;
  color: ${props => props.theme.colors.grey};
  font-size: 17px;
  line-height: 27px;
`;

export {Container, IconRow, BackButton, Text};
