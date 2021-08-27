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
import {timeFromNow} from '../../../../ui/functions/time-from-now';
import {twoLetterFromName} from '../../../../ui/functions/two-letter-from-name';

interface CommentRowProps {
  text: string;
  createdTime: string;
}

export const CommentRow: React.FC<CommentRowProps> = ({text, createdTime}) => {
  console.log('CommentRow', text, createdTime);
  return (
    <Container>
      <UserPhoto>
        <UserInitials>{twoLetterFromName('unnamed user')}</UserInitials>
      </UserPhoto>
      <TextContainer>
        <TextRow>
          <Name>unnamed user</Name>
          <Date>{timeFromNow(createdTime)}</Date>
        </TextRow>
        <Comment>{text}</Comment>
      </TextContainer>
    </Container>
  );
};
