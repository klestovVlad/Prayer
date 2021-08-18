import React from 'react';
import {colors} from '../../../../style/colors';
import {AddIcon} from '../../../../ui/Icons/AddIcon';
import {
  Container,
  Header,
  MembersRow,
  MemberPhoto,
  AddMemberButton,
  Text,
} from './styles';

export const Members = () => {
  return (
    <Container>
      <Header>MEMBERS</Header>
      <MembersRow>
        <MemberPhoto>
          <Text>AB</Text>
        </MemberPhoto>
        <MemberPhoto>
          <Text>CD</Text>
        </MemberPhoto>
        <AddMemberButton>
          <AddIcon color={colors.white} />
        </AddMemberButton>
      </MembersRow>
    </Container>
  );
};
