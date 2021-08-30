import styled from 'styled-components/native';

interface ButtonContainerProps {
  visible: boolean;
}

const ButtonContainer = styled.View<ButtonContainerProps>`
  flex-direction: row;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: flex-end;
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.red};
  padding: 5px 20px;
  margin-top: 5px;
  border-radius: 5px;
`;

const CancelButton = styled(DeleteButton)`
  background-color: ${props => props.theme.colors.blue};
  margin-left: 15px;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 14px;
`;

export {ButtonContainer, DeleteButton, CancelButton, ButtonText};
