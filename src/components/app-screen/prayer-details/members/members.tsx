import React, {useContext} from 'react';

import {ThemeContext} from 'styled-components';

import {AddIcon} from '../../../../ui/Icons/add-icon';
import {
  Container,
  Header,
  MembersRow,
  MemberPhoto,
  AddMemberButton,
  Text,
} from './styles';

export const Members = () => {
  const themeContext = useContext(ThemeContext);
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
          <AddIcon color={themeContext.colors.white} />
        </AddMemberButton>
      </MembersRow>
    </Container>
  );
};
