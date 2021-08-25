import styled from 'styled-components/native';
import {colors} from '../../style/colors';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.white};
`;

const Block = styled.View`
  height: 370px;
  background-color: ${colors.white};
`;

const Header = styled.Text`
  font-size: 36px;
  color: ${colors.dark};
  text-align: center;
  margin-bottom: 15px;
`;

export {Container, Block, Header};
