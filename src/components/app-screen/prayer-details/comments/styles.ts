import styled from 'styled-components/native';

const Container = styled.View`
  padding: 0 15px;
`;

const Header = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.theme.colors.blue};
`;

export {Container, Header};
