import React from 'react';
import {CommentRow} from '../comment-row/comment-row';
import {Container, Header} from './styles';
import {Comment} from '../../../../store/data/state';

interface CommetsProp {
  comments: Comment[];
}

export const Comments: React.FC<CommetsProp> = ({comments}) => {
  console.log('all cooment: ', comments);
  console.log(comments.length);
  return (
    <Container>
      <Header>COMMENTS</Header>
      {comments.map(item => (
        <CommentRow text={item.body} key={item.id} createdTime={item.created} />
      ))}
    </Container>
  );
};
