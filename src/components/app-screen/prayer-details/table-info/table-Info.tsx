import React from 'react';
import {
  Container,
  Row,
  FirstRow,
  Cell,
  CellLineRight,
  HeaderText,
  HeaderText2,
  Text,
  DateCaption,
} from './styles';

export const TableInfo = () => {
  return (
    <Container>
      <FirstRow>
        <CellLineRight>
          <HeaderText2>July 25 2017</HeaderText2>
          <Text>Date Added</Text>
          <DateCaption>Opened for 4 days</DateCaption>
        </CellLineRight>
        <Cell>
          <HeaderText>123</HeaderText>
          <Text>Times Prayed Total</Text>
        </Cell>
      </FirstRow>
      <Row>
        <CellLineRight>
          <HeaderText>63</HeaderText>
          <Text>Times Prayed by Me</Text>
        </CellLineRight>
        <Cell>
          <HeaderText>60</HeaderText>
          <Text>Times Prayed by Others</Text>
        </Cell>
      </Row>
    </Container>
  );
};