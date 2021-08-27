import React from 'react';
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
import {Prayer} from '../../../../store/data/state';
import {useDispatch} from 'react-redux';
import {stateAction} from '../../../../store/data/index';

type RootStackParamList = {
  'Prayer details': undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Prayer details'
>;

interface PrayerRowProsp {
  prayer: Prayer;
}

export const PrayerRow: React.FC<PrayerRowProsp> = ({prayer}) => {
  const dispatch = useDispatch();
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
        <SwipebleDeliteButton
          onPress={() => dispatch(stateAction.deletePrayerRequest(prayer.id))}
        />
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
      <Container
        answered={prayer.checked}
        onPress={() => navigation.navigate('Prayer details')}>
        <VerticalLine />
        <CheckBox
          checked={prayer.checked}
          ChangeState={() =>
            dispatch(
              stateAction.changePraуerRequest({
                id: prayer.id,
                title: prayer.title,
                checked: !prayer.checked,
              }),
            )
          }
        />
        <Text answered={prayer.checked}>{prayer.title}</Text>
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
