import styled from 'styled-components/native';
import {colors} from '../../../../style/colors';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${colors.grey};
`;

const FirstRow = styled(Row)`
  border-top-width: 1px;
`;

const Cell = styled.View`
  width: 50%;
  border-color: ${colors.grey};
  height: 108px;
  padding: 26px 15px 15px 15px;
`;

const CellLineRight = styled(Cell)`
  border-right-width: 1px;
`;

const HeaderText = styled.Text`
  font-size: 32px;
  line-height: 37px;
  color: ${colors.brown};
`;

const HeaderText2 = styled(HeaderText)`
  font-size: 22px;
  line-height: 26px;
  margin-top: 6px;
`;

const Text = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.dark};
  margin-top: 6px;
`;

const DateCaption = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.blue};
`;

export {
  Container,
  Row,
  FirstRow,
  Cell,
  CellLineRight,
  HeaderText,
  HeaderText2,
  Text,
  DateCaption,
};