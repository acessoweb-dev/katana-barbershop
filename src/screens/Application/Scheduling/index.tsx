import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Button } from 'components';

import { Props } from 'interfaces/routes.interface';

const Scheduling = ({ route, navigation }: Props) => {
  return (
    <S.SchedulingContainer>
      <BackHeader title="Agendamento" />

      <S.SchedulingContent></S.SchedulingContent>
    </S.SchedulingContainer>
  );
};

export default Scheduling;
