import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';
import {CommentRow} from './comment-row';

const Container = styled.View`
  padding: 0 15px;
`;

const Header = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.blue};
`;

export const Comments: React.FC = () => {
  return (
    <Container>
      <Header>COMMENTS</Header>
      <CommentRow />
      <CommentRow />
      <CommentRow />
      <CommentRow />
      <CommentRow />
      <CommentRow />
    </Container>
  );
};
