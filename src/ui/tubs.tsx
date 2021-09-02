import React from 'react';
import styled from 'styled-components/native';

import {SubscribiedCounter} from './subscribied-counter';

interface TubsProps {
  listOfTubs: Array<string>;
  type: number;
  NumOfView?: number;
  setNumOfView(arg0: number): void;
  subscribiedNum: number;
}

interface TubsItemProps {
  isActive: boolean;
}

const TubsItem = styled.TouchableOpacity<TubsItemProps>`
  display: flex;
  flex: 1;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: ${props => (props.isActive ? '#72a8bc' : '#72a8bc00')};
`;

interface TubsTextProps {
  isActive: boolean;
}

const TubsText = styled.Text<TubsTextProps>`
  color: ${props => (props.isActive ? '#72a8bc' : '#c8c8c8')};
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

export const Tubs: React.FC<TubsProps> = ({
  listOfTubs,
  type,
  NumOfView,
  setNumOfView,
  subscribiedNum,
}: TubsProps) =>
  type === 1 ? (
    <TubsContainet>
      {listOfTubs.map((item, index) => (
        <TubsItem
          onPress={() => setNumOfView(index)}
          isActive={index === NumOfView}
          key={index}>
          <TubsText isActive={index === NumOfView}>{item}</TubsText>
          <SubscribiedCounter
            visible={item === 'subscribed'}
            subscribiedNum={subscribiedNum}
          />
        </TubsItem>
      ))}
    </TubsContainet>
  ) : null;
