import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  margin: 0 15px;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px 23px;
  background-color: #bfb393;
  border-radius: 15px;
  margin: 0 auto;
`;

export const Text = styled.Text`
  text-transform: uppercase;
  color: white;
`;
