import React from 'react';

import * as S from './styles';
import { defaultTheme } from 'styles/default';

import { useNavigation } from '@react-navigation/native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

interface HomeHeader {}
const HomeHeader = () => {
  //const user = useUserStore(state => state.user);

  const navigation: any = useNavigation();

  return (
    <S.HomeHeaderContainer>
      <S.HomeHeaderContent>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={26} color={defaultTheme.primary} />
        </TouchableOpacity>
      </S.HomeHeaderContent>
    </S.HomeHeaderContainer>
  );
};

export default HomeHeader;
