import React from 'react';
import {
  Content,
  Header,
  ButtonContainer,
  ButtonLogout,
  ButtonCancel,
  ButtonText,
  Container,
} from './style';
interface LogoutPopupProps {
  isShown: boolean;
  setstateLogoutPopup(arg0: boolean): void;
}

export const LogoutPopup: React.FC<LogoutPopupProps> = ({
  isShown,
  setstateLogoutPopup,
}) => {
  return isShown ? (
    <Container onPress={() => setstateLogoutPopup(false)}>
      <Content>
        <Header>do you want to logout?</Header>
        <ButtonContainer>
          <ButtonLogout>
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
