import { FC } from 'react';

import { Comment } from '../../../../store/comments/state';
import { CommentRow } from '../comment-row/comment-row';
import { Container, Header } from './styles';

interface CommetsProp {
  comments: Comment[];
}

export const Comments: FC<CommetsProp> = ({ comments }) => {
  return (
    <Container>
      <Header>COMMENTS</Header>
      {comments.map(item => (
        <CommentRow
          text={item.body}
          key={item.id}
          createdTime={item.created}
          commmentId={item.id}
        />
      ))}
    </Container>
  );
};
