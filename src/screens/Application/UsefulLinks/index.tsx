import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const UsefulLinks = ({ route, navigation }: Props) => {
  return (
    <S.UsefulLinksContainer>
      <BackHeader />
      <S.UsefulLinksContent>
        <Text>UsefulLinks</Text>
      </S.UsefulLinksContent>
    </S.UsefulLinksContainer>
  );
};

export default UsefulLinks;
