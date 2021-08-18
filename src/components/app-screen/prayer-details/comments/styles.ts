import styled from 'styled-components/native';
import {colors} from '../../../../style/colors';

const Container = styled.View`
  padding: 0 15px;
`;

const Header = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.blue};
`;

export {Container, Header};
