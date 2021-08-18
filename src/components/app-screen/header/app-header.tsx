import React from 'react';

import {Tubs} from '../../../ui/tubs';
import {AppButton} from '../../../ui/app-button';
import {Header, HeaderText, AddTaskButton} from './styles';

interface AppHeaderProps {
  headerText: string;
  type: number;
  NumOfView: number;
  setNumOfView(arg0: number): void;
  onPress(): void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  headerText,
  type,
  NumOfView,
  setNumOfView,
  onPress,
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
      />
    </Header>
  );
};
