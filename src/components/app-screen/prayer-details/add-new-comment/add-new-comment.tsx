import React from 'react';
import {CommentIcon} from '../../../../ui/Icons/CommentIcon';
import {Container, CommentInput} from './styles';

export const AddNewComment: React.FC = () => {
  return (
    <Container>
      <CommentIcon />
      <CommentInput placeholder="Add a comment..." />
    </Container>
  );
};
