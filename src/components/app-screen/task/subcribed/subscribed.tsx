import React from 'react';
import styled from 'styled-components/native';
import {Pray} from '../../../../store/data/state';
interface MyPrayersProps {
  prayers: Pray[];
}

export const Subscribed: React.FC<MyPrayersProps> = ({prayers}) => {
  return <Text>text</Text>;
};

const Text = styled.Text``;