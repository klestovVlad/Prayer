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

const CommentInput = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  margin-left: 12px;
`;

export {Container, CommentInput};
