import styled from 'styled-components/native';
import {colors} from '../../../../../style/colors';

interface ButtonContainerProps {
  visible: boolean;
}

const ButtonContainer = styled.View<ButtonContainerProps>`
  flex-direction: row;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: flex-end;
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: ${colors.red};
  padding: 5px 20px;
  margin-top: 5px;
  border-radius: 5px;
`;

const CancelButton = styled(DeleteButton)`
  background-color: ${colors.blue};
  margin-left: 15px;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 14px;
`;

export {ButtonContainer, DeleteButton, CancelButton, ButtonText};
