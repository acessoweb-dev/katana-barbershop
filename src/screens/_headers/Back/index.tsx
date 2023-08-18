import React from 'react';

import * as S from './styles';
import { defaultTheme } from 'styles/default';

import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { backIcon } from 'assets';

interface BackHeader {
  title?: string;
}

const BackHeader = ({ title }: BackHeader) => {
  const navigation: any = useNavigation();

  return (
    <S.BackHeaderContainer>
      <S.BackHeaderContent>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={26} color={defaultTheme.primary} />
        </TouchableOpacity>
        {title ? <S.BackHeaderTitle>{title}</S.BackHeaderTitle> : null}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ width: 18, height: 18 }} source={backIcon} />
        </TouchableOpacity>
      </S.BackHeaderContent>
    </S.BackHeaderContainer>
  );
};

export default BackHeader;
