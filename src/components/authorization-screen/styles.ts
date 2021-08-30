import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;

const Block = styled.View`
  height: 370px;
  background-color: ${props => props.theme.colors.white};
`;

const Header = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.dark};
  text-align: center;
  margin-bottom: 15px;
`;

export {Container, Block, Header};
