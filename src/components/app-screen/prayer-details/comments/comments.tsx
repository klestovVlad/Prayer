import React from 'react';
import {CommentRow} from '../comment-row/comment-row';
import {Container, Header} from './styles';

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
