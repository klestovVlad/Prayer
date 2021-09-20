import React, { useContext } from 'react';
import { BackIcon } from '../../../../ui/icons/back-icon';
import { HandsIcon } from '../../../../ui/icons/hands-icon';
import { Container, IconRow, BackButton, Text } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
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
