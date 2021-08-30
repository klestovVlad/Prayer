import styled from 'styled-components/native';

const Container = styled.View`
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.grey};
  padding: 17px 0;
  display: flex;
  flex-direction: row;
`;

const UserPhoto = styled.View`
  height: 46px;
  width: 46px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 23px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const UserInitials = styled.Text`
  text-align: center;
  font-size: 17px;
  color: ${props => props.theme.colors.white};
`;

const TextContainer = styled.View``;

const TextRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Name = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.dark};
`;

const Date = styled.Text`
  font-size: 13px;
  line-height: 16px;
  margin-left: 6px;
  color: ${props => props.theme.colors.darkGrey};
`;

const Comment = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.dark};
  margin-top: 2px;
`;

export {
  Container,
  UserPhoto,
  UserInitials,
  TextContainer,
  TextRow,
  Name,
  Date,
  Comment,
};
