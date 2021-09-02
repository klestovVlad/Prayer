import React from 'react';
import styled from 'styled-components/native';

interface SubscribiedCounterProps {
  subscribiedNum: number;
  visible: boolean;
}

const SubscribiedContainer = styled.View`
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
const NumOfSubscribied = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 10px;
  line-height: 10px;
`;

export const SubscribiedCounter: React.FC<SubscribiedCounterProps> = ({
  subscribiedNum,
  visible,
}: SubscribiedCounterProps) => {
  const count = Math.min(subscribiedNum, 99);
  return visible ? (
    <SubscribiedContainer>
      <NumOfSubscribied>{count}</NumOfSubscribied>
    </SubscribiedContainer>
  ) : null;
};
