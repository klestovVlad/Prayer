import React from 'react';
import {BackIcon} from '../../../../ui/Icons/BackIcon';
import {HandsIcon} from '../../../../ui/Icons/HandsIcon';
import {colors} from '../../../../style/colors';
import {Container, IconRow, BackButton, Text} from './styles';

interface HeaderProps {
  navigation: any;
}

export const Header: React.FC<HeaderProps> = ({navigation}) => {
  return (
    <Container>
      <IconRow>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <HandsIcon color={colors.white} />
      </IconRow>
      <Text>
        Prayer item two which is for my family to love God whole heartedly.
      </Text>
    </Container>
  );
};
