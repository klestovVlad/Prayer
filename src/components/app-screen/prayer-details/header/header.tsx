import { useNavigation } from '@react-navigation/native';
import React, { useContext, FC } from 'react';
import { ThemeContext } from 'styled-components';

import { BackIcon } from '../../../../ui/icons/back-icon';
import { HandsIcon } from '../../../../ui/icons/hands-icon';
import { BackButton, Container, IconRow, Text } from './styles';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }: HeaderProps) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <Container>
      <IconRow>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <HandsIcon color={themeContext.colors.white} />
      </IconRow>
      <Text>{title}</Text>
    </Container>
  );
};
