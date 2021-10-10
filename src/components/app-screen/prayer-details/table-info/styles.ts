import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.grey};
`;

export const FirstRow = styled(Row)`
  border-top-width: 1px;
`;

export const Cell = styled.View`
  width: 50%;
  border-color: ${(props) => props.theme.colors.grey};
  height: 108px;
  padding: 26px 15px 15px 15px;
`;

export const CellLineRight = styled(Cell)`
  border-right-width: 1px;
`;

export const HeaderText = styled.Text`
  font-size: 32px;
  line-height: 37px;
  color: ${(props) => props.theme.colors.brown};
`;

export const HeaderText2 = styled(HeaderText)`
  font-size: 22px;
  line-height: 26px;
  margin-top: 6px;
`;

export const Text = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.dark};
  margin-top: 6px;
`;

export const DateCaption = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.blue};
`;
