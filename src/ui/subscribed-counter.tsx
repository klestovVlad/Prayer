import React, { FC } from 'react';
import styled from 'styled-components/native';

interface SubscribedCounterProps {
  subscribedNum: number;
  visible: boolean;
}

export const SubscribedCounter: FC<SubscribedCounterProps> = ({
  subscribedNum,
  visible,
}: SubscribedCounterProps) => {
  const count = Math.min(subscribedNum, 99);
  return visible ? (
    <SubscribedContainer>
      <NumOfSubscribed>{count}</NumOfSubscribed>
    </SubscribedContainer>
  ) : null;
};

const SubscribedContainer = styled.View`
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
const NumOfSubscribed = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 10px;
  line-height: 10px;
`;
