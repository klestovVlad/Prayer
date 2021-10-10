import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  top: 0;
  position: absolute;
  height: 100%;
  flex-direction: column;
  width: 100%;
  z-index: 99;
`;

export const Content = styled.View`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.brown};
  z-index: 3;
  position: absolute;
  top: -10px;
  width: 100%;
  border-radius: 15px;
`;

export const Header = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 17px;
  text-align: center;
  margin-top: 25px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.red};
  padding: 15px 25px;
  border-radius: 15px;
`;

export const ButtonCancel = styled(ButtonLogout)`
  background-color: ${(props) => props.theme.colors.blue};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 17px;
`;
