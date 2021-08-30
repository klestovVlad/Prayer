import React from 'react';

import {Animated} from 'react-native';

import {
  Container,
  UserPhoto,
  UserInitials,
  TextContainer,
  TextRow,
  Name,
  Date,
  Comment,
} from './styles';
import {timeFromNow} from '../../../../ui/functions/time-from-now';
import {twoLetterFromName} from '../../../../ui/functions/two-letter-from-name';
import {SwipebleDeliteButton} from '../../../../ui/swipeble-delete-button';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch} from 'react-redux';
import {commentsAction} from '../../../../store/comments/slice';
interface CommentRowProps {
  text: string;
  createdTime: string;
  commmentId: number;
}

export const CommentRow: React.FC<CommentRowProps> = ({
  text,
  createdTime,
  commmentId,
}) => {
  console.log('CommentRow', text, createdTime, commmentId);
  const dispatch = useDispatch();

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
          onPress={() =>
            dispatch(commentsAction.deleteCommentRequest(commmentId))
          }
        />
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
      <Container>
        <UserPhoto>
          <UserInitials>{twoLetterFromName('My comment')}</UserInitials>
        </UserPhoto>
        <TextContainer>
          <TextRow>
            <Name>My comment</Name>
            <Date>{timeFromNow(createdTime)}</Date>
          </TextRow>
          <Comment>{text}</Comment>
        </TextContainer>
      </Container>
    </Swipeable>
  );
};
