import React from 'react';
import styled from 'styled-components/native';

interface subscribedCounterProps {
  subscribedNum: number;
  visible: boolean;
}

const subscribedContainer = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${props => props.theme.colors.red};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 30px;
`;
const NumOfsubscribed = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 10px;
  line-height: 10px;
`;

export const subscribedCounter: React.FC<subscribedCounterProps> = ({
  subscribedNum,
  visible,
}: subscribedCounterProps) => {
  const count = Math.min(subscribedNum, 99);
  return visible ? (
    <subscribedContainer>
      <NumOfsubscribed>{count}</NumOfsubscribed>
    </subscribedContainer>
  ) : null;
};
