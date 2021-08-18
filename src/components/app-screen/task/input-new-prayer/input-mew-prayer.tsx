import React from 'react';

import {AddIcon} from '../../../../ui/Icons/AddIcon';
import {colors} from '../../../../style/colors';
import {Container, Input, IconContainer} from './styles';

export const InputNewPrayer: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <AddIcon color={colors.blue} />
      </IconContainer>
      <Input />
    </Container>
  );
};
