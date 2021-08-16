import React from 'react';
import styled from 'styled-components/native';
import {useState} from 'react';

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

interface TubsProps {
  listOfTubs: Array<string>;
  visibility: boolean;
}

export const Tubs: React.FC<TubsProps> = ({listOfTubs, visibility}) => {
  const [numOfTubs, setnumOfTubs] = useState(0);
  return visibility ? (
    <TubsContainet>
      {listOfTubs.map((item, index) => (
        <TubsItem
          onPress={() => setnumOfTubs(index)}
          isActive={index === numOfTubs}
          key={index}>
          <TubsText isActive={index === numOfTubs}>{item}</TubsText>
        </TubsItem>
      ))}
    </TubsContainet>
  ) : (
    <></>
  );
};
