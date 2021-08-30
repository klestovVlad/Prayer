import React from 'react';
import styled from 'styled-components/native';

import {LoadIcon} from './Icons/loading';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({isLoading}) => {
  return isLoading ? (
    <Content>
      <LoadIcon />
    </Content>
  ) : null;
};

const Content = styled.View`
  background-color: white;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-index: 2;
  justify-content: center;
`;
