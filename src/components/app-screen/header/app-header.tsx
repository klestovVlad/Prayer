import React from 'react';

import { AppButton } from '../../../ui/app-button';
import { Tubs } from '../../../ui/tubs';
import { AddTaskButton, Header, HeaderText } from './styles';

interface AppHeaderProps {
  headerText: string;
  type: number;
  NumOfView: number;
  setNumOfView(arg0: number): void;
  onPress(): void;
  subscribedNum: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  headerText,
  type,
  NumOfView,
  setNumOfView,
  onPress,
  subscribedNum,
}) => {
  return (
    <Header>
      <HeaderText>{headerText}</HeaderText>
      <AddTaskButton>
        <AppButton onPress={onPress} type={type} />
      </AddTaskButton>
      <Tubs
        type={type}
        listOfTubs={['My prayers', 'subscribed']}
        setNumOfView={setNumOfView}
        NumOfView={NumOfView}
        subscribedNum={subscribedNum}
      />
    </Header>
  );
};
