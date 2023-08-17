import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface BackHeader {
  title?: string;
}

const BackHeader = ({ title }: BackHeader) => {
  const navigation: any = useNavigation();

  return (
    <S.BackHeaderContainer>
      <S.BackHeaderContent>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={25} color="#184668" />
        </TouchableOpacity>
        {title ? <S.BackHeaderTitle>{title}</S.BackHeaderTitle> : null}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={25} color="#737373" />
        </TouchableOpacity>
      </S.BackHeaderContent>
    </S.BackHeaderContainer>
  );
};

export default BackHeader;
