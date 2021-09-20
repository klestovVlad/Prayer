import React from 'react';
import { useDispatch } from 'react-redux';

import { UserAction } from '../../../../store/user/slice';
import {
  ButtonCancel,
  ButtonContainer,
  ButtonLogout,
  ButtonText,
  Container,
  Content,
  Header,
} from './style';
interface LogoutPopupProps {
  isShown: boolean;
  setstateLogoutPopup(arg0: boolean): void;
}

export const LogoutPopup: React.FC<LogoutPopupProps> = ({
  isShown,
  setstateLogoutPopup,
}) => {
  const dispatch = useDispatch();
  return isShown ? (
    <Container onPress={() => setstateLogoutPopup(false)}>
      <Content>
        <Header>do you want to logout?</Header>
        <ButtonContainer>
          <ButtonLogout onPress={() => dispatch(UserAction.logout())}>
            <ButtonText>Log out</ButtonText>
          </ButtonLogout>
          <ButtonCancel onPress={() => setstateLogoutPopup(false)}>
            <ButtonText>Cancel</ButtonText>
          </ButtonCancel>
        </ButtonContainer>
      </Content>
    </Container>
  ) : null;
};
