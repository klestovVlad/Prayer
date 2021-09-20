import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({theme: {colors}}) => colors.white};
`;
export const ScrollView = styled.ScrollView`
  padding-bottom: 15px;
`;
