import React, { FC } from 'react';
import { Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch } from 'react-redux';

import { commentsAction } from '../../../../store/comments/slice';
import { timeFromNow } from '../../../../ui/functions/time-from-now';
import { twoLetterFromName } from '../../../../ui/functions/two-letter-from-name';
import { SwipebleDeliteButton } from '../../../../ui/swipeble-delete-button';
import {
  Comment,
  Container,
  Date,
  Name,
  TextContainer,
  TextRow,
  UserInitials,
  UserPhoto,
} from './styles';
interface CommentRowProps {
  text: string;
  createdTime: string;
  commentId: number;
}

export const CommentRow: FC<CommentRowProps> = ({
  text,
  createdTime,
  commentId,
}) => {
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
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <SwipebleDeliteButton
          onPress={() =>
            dispatch(commentsAction.deleteCommentRequest(commentId))
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
