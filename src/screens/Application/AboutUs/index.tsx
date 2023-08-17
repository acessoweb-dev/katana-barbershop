import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const AboutUs = ({ route, navigation }: Props) => {
  return (
    <S.AboutUsContainer>
      <BackHeader />
      <S.AboutUsContent>
        <Text>AboutUs</Text>
      </S.AboutUsContent>
    </S.AboutUsContainer>
  );
};

export default AboutUs;
