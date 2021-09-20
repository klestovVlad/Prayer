import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px 15px;
`;

export const Header = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.theme.colors.blue};
`;

export const MembersRow = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px 15px 15px 0px;
`;

export const MemberPhoto = styled.View`
  height: 32px;
  width: 32px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 16px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const AddMemberButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  background-color: ${props => props.theme.colors.brown};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;
