import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

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
          <FontAwesome5 name="bars" size={25} color={'#737373'} />
        </TouchableOpacity>
      </S.HomeHeaderContent>
    </S.HomeHeaderContainer>
  );
};

export default HomeHeader;
