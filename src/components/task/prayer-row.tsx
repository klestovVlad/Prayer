import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import {CheckBox} from '../../ui/checkBox';

const Container = styled.View`
  position: relative;
  margin: 0 15px;
  padding: 25px 0;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: #e5e5e5;
  display: flex;
  flex-direction: row;
`;

const VerticalLine = styled.View`
  margin-right: 15px;
  width: 3px;
  height: 22px;
  background-color: #ac5253;
  border-radius: 3px;
`;

const Input = styled.TextInput`
  font-size: 17px;
  color: #9c9c9c;
  padding: 0;
  transform: translateY(-3px);
  margin-left: 15px;
`;

export const PrayerRow: React.FC = () => {
  const [answered, setanswered] = useState(false);
  return (
    <Container>
      <VerticalLine />
      <CheckBox Cheked={answered} ChangeState={setanswered} />
      <Input />
    </Container>
  );
};
