import React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import {CheckBox} from '../../ui/checkBox';
import {UserIcon} from '../../ui/Icons/UserIcon';
import {HandsIcon} from '../../ui/Icons/HandsIcon';
import {colors} from '../style/colors';

interface ContainerProps {
  answered: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  position: relative;
  margin: 0 15px;
  padding: 25px 0;
  border-style: solid;
  border-bottom-width: ${props => (props.answered ? 0 : 2)}px;
  border-top-width: ${props => (props.answered ? 2 : 0)}px;
  border-color: #e5e5e5;
  display: flex;
  flex-direction: row;
`;

const VerticalLine = styled.View`
  margin-right: 15px;
  width: 3px;
  height: 22px;
  background-color: #ac5253;
  border-radius: 3px;
`;

interface TextProps {
  answered: boolean;
}

const Text = styled.Text<TextProps>`
  font-size: 17px;
  color: #514d47;
  padding: 0;
  transform: translateY(-3px);
  margin-left: 15px;
  text-decoration: ${props => (props.answered ? 'line-through' : 'none')};
`;

const IconsContainer = styled.View`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Number = styled.Text`
  font-size: 12px;
  color: #514d47;
  margin: 0 5px;
  min-width: 15px;
`;

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
