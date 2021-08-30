import styled from 'styled-components/native';

interface ContainerProps {
  answered: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  position: relative;
  margin: 0 15px;
  padding: 25px 0;
  border-style: solid;
  border-bottom-width: ${props => (props.answered ? 0 : 2)}px;
  border-top-width: ${props => (props.answered ? 2 : 0)}px;
  border-color: ${props => props.theme.colors.grey};
  display: flex;
  flex-direction: row;
`;

const VerticalLine = styled.View`
  margin-right: 15px;
  width: 3px;
  height: 22px;
  background-color: ${props => props.theme.colors.red};
  border-radius: 3px;
`;

interface TextProps {
  answered: boolean;
}

const Text = styled.Text<TextProps>`
  font-size: 17px;
  color: ${props => props.theme.colors.dark};
  padding: 0;
  transform: translateY(-3px);
  margin-left: 15px;
  text-decoration: ${props => (props.answered ? 'line-through' : 'none')};
`;

const IconsContainer = styled.View`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Number = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.dark};
  margin: 0 5px;
  min-width: 15px;
`;

export {Container, VerticalLine, Text, IconsContainer, Number};
