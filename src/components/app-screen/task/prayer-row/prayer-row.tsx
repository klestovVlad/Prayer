import React from 'react';
import {useState} from 'react';
import {CheckBox} from '../../../../ui/check-box';
import {UserIcon} from '../../../../ui/Icons/UserIcon';
import {HandsIcon} from '../../../../ui/Icons/HandsIcon';
import {colors} from '../../../../style/colors';
import {Container, VerticalLine, Text, IconsContainer, Number} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Animated} from 'react-native';

interface PrayerRowProps {
  navigation: any;
}

export const PrayerRow: React.FC<PrayerRowProps> = ({navigation}) => {
  const [answered, setanswered] = useState(false);

  const renderRightActions = (
    proggres: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-100, -50, 0, 1],
      outputRange: [-30, 50, 100, 101],
    });
    return (
      <Animated.View style={{transform: [{translateX: trans}]}}>
        <Text answered={answered}>Prayer text</Text>
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
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
    </Swipeable>
  );
};
