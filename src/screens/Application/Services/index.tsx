import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Services = ({ route, navigation }: Props) => {
  return (
    <S.ServicesContainer>
      <BackHeader />
      <S.ServicesContent>
        <Text>Services</Text>
      </S.ServicesContent>
    </S.ServicesContainer>
  );
};

export default Services;
