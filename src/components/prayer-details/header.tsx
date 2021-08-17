import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';
import {BackIcon} from '../../ui/Icons/BackIcon';
import {HandsIcon} from '../../ui/Icons/HandsIcon';

const Container = styled.View`
  padding: 23px 15px;
  background-color: ${colors.brown};
`;

const IconRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity``;

const Text = styled.Text`
  margin-top: 21px;
  color: ${colors.white};
  font-size: 17px;
  line-height: 27px;
`;

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
