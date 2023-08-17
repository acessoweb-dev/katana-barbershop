import React from 'react';
import * as S from './styles';

import HomeHeader from 'screens/_headers/Home';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Home = ({ route, navigation }: Props) => {
  return (
    <S.HomeContainer>
      <HomeHeader />
      <S.HomeContent>
        <Text>Home</Text>
      </S.HomeContent>
    </S.HomeContainer>
  );
};

export default Home;
