import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useContext } from 'react';
import { Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { getCommentsByPrayerId } from '../../../../store/comments/selectors';
import {
  changePrayerAction,
  deletePrayerAction,
} from '../../../../store/prayers/actions';
import { Prayer } from '../../../../store/prayers/state';
import { CheckBox } from '../../../../ui/check-box';
import { trimTextIfItIsLong } from '../../../../ui/functions/trim-text-if-it-is-long';
import { HandsIcon } from '../../../../ui/icons/hands-icon';
import { UserIcon } from '../../../../ui/icons/user-icon';
import { SwipeableDeleteButton } from '../../../../ui/swipeble-delete-button';
import { Container, IconsContainer, Number, Text, VerticalLine } from './styles';

type RootStackParamList = {
  'Prayer details': {
    title: string;
    prayerId: number;
    columnId: number;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Prayer details'
>;

interface PrayerRowProsp {
  prayer: Prayer;
}

export const PrayerRow: FC<PrayerRowProsp> = ({ prayer }: PrayerRowProsp) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const comments = useSelector(getCommentsByPrayerId(prayer.id));
  const themeContext = useContext(ThemeContext);

  const renderRightActions = (
    proggres: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-100, -50, 0, 1],
      outputRange: [-30, 50, 100, 101],
    });
    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <SwipeableDeleteButton onPress={() => dispatch(deletePrayerAction(prayer.id))} />
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
      <Container
        answered={prayer.checked}
        onPress={() =>
          navigation.navigate('Prayer details', {
            title: prayer.title,
            prayerId: prayer.id,
            columnId: prayer.columnId,
          })
        }
      >
        <VerticalLine />
        <CheckBox
          checked={prayer.checked}
          ChangeState={() =>
            dispatch(
              changePrayerAction({
                id: prayer.id,
                title: prayer.title,
                checked: !prayer.checked,
              }),
            )
          }
        />
        <Text answered={prayer.checked}>{trimTextIfItIsLong(prayer.title)}</Text>
        <IconsContainer>
          <UserIcon />
          <Number>{comments.length}</Number>
          <HandsIcon color={themeContext.colors.blue} />
          <Number>0</Number>
        </IconsContainer>
      </Container>
    </Swipeable>
  );
};
