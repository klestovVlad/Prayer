import React from 'react';
import styled from 'styled-components/native';
import {CommentIcon} from '../../ui/Icons/CommentIcon';
import {colors} from '../style/colors';

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

export const AddNewComment: React.FC = () => {
  return (
    <Container>
      <CommentIcon />
      <CommentInput placeholder="Add a comment..." />
    </Container>
  );
};
