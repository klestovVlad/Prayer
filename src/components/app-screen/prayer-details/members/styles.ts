import styled from 'styled-components/native';
import {colors} from '../../../../style/colors';

const Container = styled.View`
  padding: 15px 15px;
`;

const Header = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.blue};
`;

const MembersRow = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px 15px 15px 0px;
`;

const MemberPhoto = styled.View`
  height: 32px;
  width: 32px;
  background-color: ${colors.blue};
  border-radius: 16px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const AddMemberButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  background-color: ${colors.brown};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 17px;
  color: ${colors.white};
`;

export {Container, Header, MembersRow, MemberPhoto, AddMemberButton, Text};