import styled from 'styled-components/native';

const Container = styled.View`
  margin: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 15px 15px 15px 52px;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 15px;
  transform: translateY(3px);
`;

export {Container, IconContainer};
