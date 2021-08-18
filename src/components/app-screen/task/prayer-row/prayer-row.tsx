import React from 'react';
import {useState} from 'react';
import {CheckBox} from '../../../../ui/checkBox';
import {UserIcon} from '../../../../ui/Icons/UserIcon';
import {HandsIcon} from '../../../../ui/Icons/HandsIcon';
import {colors} from '../../../../style/colors';
import {Container, VerticalLine, Text, IconsContainer, Number} from './styles';

interface PrayerRowProps {
  navigation: any;
}

export const PrayerRow: React.FC<PrayerRowProps> = ({navigation}) => {
  const [answered, setanswered] = useState(false);
  return (
    <Container
      answered={answered}
      onPress={() => navigation.navigate('Prayer details')}>
      <VerticalLine />
      <CheckBox Cheked={answered} ChangeState={setanswered} />
      <Text answered={answered}>Prayer text</Text>
      <IconsContainer>
        <UserIcon />
        <Number>12</Number>
        <HandsIcon color={colors.blue} />
        <Number>12</Number>
      </IconsContainer>
    </Container>
  );
};
