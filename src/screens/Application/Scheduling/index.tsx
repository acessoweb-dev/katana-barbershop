import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Scheduling = ({ route, navigation }: Props) => {
  return (
    <S.SchedulingContainer>
      <BackHeader />
      <S.SchedulingContent>
        <Text>Scheduling</Text>
      </S.SchedulingContent>
    </S.SchedulingContainer>
  );
};

export default Scheduling;
