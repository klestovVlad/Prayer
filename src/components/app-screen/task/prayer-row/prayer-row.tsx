import React from 'react';
import {useState} from 'react';
import {CheckBox} from '../../../../ui/check-box';
import {UserIcon} from '../../../../ui/Icons/UserIcon';
import {HandsIcon} from '../../../../ui/Icons/HandsIcon';
import {colors} from '../../../../style/colors';
import {Container, VerticalLine, Text, IconsContainer, Number} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SwipebleDeliteButton} from '../../../../ui/swipeble-delete-button';

type RootStackParamList = {
  'Prayer details': undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Prayer details'
>;

export const PrayerRow: React.FC = () => {
  const [answered, setanswered] = useState(false);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

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
        <SwipebleDeliteButton />
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
