import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../style/colors';

interface SubscribiedCounterProps {
  subscribiedNum: number;
  visible: boolean;
}

export const SubscribiedCounter: React.FC<SubscribiedCounterProps> = ({
  subscribiedNum,
  visible,
}) => {
  const count = subscribiedNum > 99 ? 99 : subscribiedNum;
  return visible ? (
    <SubscribiedContainer>
      <NumOfSubscribied>{count}</NumOfSubscribied>
    </SubscribiedContainer>
  ) : (
    <></>
  );
};

const SubscribiedContainer = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${colors.red};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 30px;
`;
const NumOfSubscribied = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 10px;
  line-height: 10px;
`;
