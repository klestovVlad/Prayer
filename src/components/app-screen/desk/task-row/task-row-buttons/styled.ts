import styled from 'styled-components/native';

interface ButtonContainerProps {
  visible: boolean;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  flex-direction: row;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: flex-end;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.red};
  padding: 5px 20px;
  margin-top: 5px;
  border-radius: 5px;
`;

export const CancelButton = styled(DeleteButton)`
  background-color: ${props => props.theme.colors.blue};
  margin-left: 15px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 14px;
`;
