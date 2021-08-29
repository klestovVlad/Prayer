import styled from 'styled-components/native';
import {colors} from '../../../../style/colors';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  align-items: center;
  border-top-width: 1px;
  border-color: ${colors.grey};
`;

export {Container};
