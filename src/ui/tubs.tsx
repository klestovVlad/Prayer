import React, { FC } from 'react';
import styled from 'styled-components/native';

import { SubscribedCounter } from './subscribed-counter';

interface TubsProps {
  listOfTubs: Array<string>;
  type: number;
  NumOfView?: number;
  setNumOfView(arg0: number): void;
  subscribedNum: number;
}

interface TubsItemProps {
  isActive: boolean;
}

interface TubsTextProps {
  isActive: boolean;
}

export const Tubs: FC<TubsProps> = ({
  listOfTubs,
  type,
  NumOfView,
  setNumOfView,
  subscribedNum,
}: TubsProps) =>
  type === 1 ? (
    <TubsContainet>
      {listOfTubs.map((item, index) => (
        <TubsItem
          onPress={() => setNumOfView(index)}
          isActive={index === NumOfView}
          key={index}
        >
          <TubsText isActive={index === NumOfView}>{item}</TubsText>
          <SubscribedCounter
            visible={item === 'subscribed'}
            subscribedNum={subscribedNum}
          />
        </TubsItem>
      ))}
    </TubsContainet>
  ) : null;

const TubsItem = styled.TouchableOpacity<TubsItemProps>`
  display: flex;
  flex: 1;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: ${(props) => (props.isActive ? '#72a8bc' : '#72a8bc00')};
`;

const TubsText = styled.Text<TubsTextProps>`
  color: ${(props) => (props.isActive ? '#72a8bc' : '#c8c8c8')};
  font-size: 17px;
  display: flex;
  text-align: center;
  flex: 1;
  text-transform: uppercase;
`;

const TubsContainet = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
