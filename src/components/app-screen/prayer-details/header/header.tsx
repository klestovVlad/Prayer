import React from 'react';
import {BackIcon} from '../../../../ui/Icons/BackIcon';
import {HandsIcon} from '../../../../ui/Icons/HandsIcon';
import {colors} from '../../../../style/colors';
import {Container, IconRow, BackButton, Text} from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconRow>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <HandsIcon color={colors.white} />
      </IconRow>
      <Text>{title}</Text>
    </Container>
  );
};
