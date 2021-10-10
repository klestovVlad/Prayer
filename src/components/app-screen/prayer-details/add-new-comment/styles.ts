import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  align-items: center;
  border-top-width: 1px;
  border-color: ${(props) => props.theme.colors.grey};
`;
