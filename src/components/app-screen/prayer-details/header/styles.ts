import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 23px 15px;
  background-color: ${props => props.theme.colors.brown};
`;

export const IconRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const Text = styled.Text`
  margin-top: 21px;
  color: ${props => props.theme.colors.white};
  font-size: 17px;
  line-height: 27px;
`;

