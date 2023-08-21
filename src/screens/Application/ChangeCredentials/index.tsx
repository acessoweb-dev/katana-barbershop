import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const ChangeCredentials = ({ route, navigation }: Props) => {
  return (
    <S.ChangeCredentialsContainer>
      <BackHeader title="Meu Perfil" />
      <S.ChangeCredentialsContent>
        <Text>ChangeCredentials</Text>
      </S.ChangeCredentialsContent>
    </S.ChangeCredentialsContainer>
  );
};

export default ChangeCredentials;
