import React from 'react';
import {
  Container,
  UserPhoto,
  UserInitials,
  TextContainer,
  TextRow,
  Name,
  Date,
  Comment,
} from './styles';

export const CommentRow: React.FC = () => {
  return (
    <Container>
      <UserPhoto>
        <UserInitials>AB</UserInitials>
      </UserPhoto>
      <TextContainer>
        <TextRow>
          <Name>Anna Barber</Name>
          <Date>2 days ago</Date>
        </TextRow>
        <Comment>Hey, Hey!</Comment>
      </TextContainer>
    </Container>
  );
};
