import React from 'react';
import * as S from './styles';
import { View, Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

import {
  headerImg,
  homeIcon,
  schedulingIcon,
  servicesIcon,
  productsIcon,
  linksIcon,
  announcementsIcon,
  aboutusIcon,
  suggestionsIcon,
  userIcon,
  logoTransparentImg,
} from 'assets';

// import { logout } from 'utils/functions';

const DrawerCustom = (props: any) => {
  const navigation = props.navigation;

  let routes = [
    {
      name: 'Home',
      icon: homeIcon,
      nav: () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }, { name: 'CategoriasRoutes' }],
        });
        navigation.navigate('Home');
      },
    },
    {
      name: 'Agendamento',
      icon: schedulingIcon,
      nav: () => navigation.navigate('Scheduling'),
    },
    {
      name: 'Serviços',
      icon: servicesIcon,
      nav: () => navigation.navigate('Services'),
    },
    {
      name: 'Produtos',
      icon: productsIcon,
      nav: () => navigation.navigate('Products'),
    },
    {
      name: 'Links Úteis',
      icon: linksIcon,
      nav: () => navigation.navigate('UsefulLinks'),
    },
    {
      name: 'Comunicados',
      icon: announcementsIcon,
      nav: () => navigation.navigate('Announcements'),
    },
    {
      name: 'Sobre Nós',
      icon: aboutusIcon,
      nav: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'Sugestões',
      icon: suggestionsIcon,
      nav: () => navigation.navigate('Suggestions'),
    },
    {
      name: 'Meu Perfil',
      icon: userIcon,
      nav: () => navigation.navigate('ChangeCredentials'),
    },

    // {
    //   name: 'Sair',
    //   icon: about,
    //   nav: () => logout(),
    // },
  ];

  return (
    <S.DrawerCustomContainer>
      <S.HeaderStyle.Header>
        <S.HeaderStyle.LogoImg
          source={logoTransparentImg}
          resizeMode="contain"
        />
      </S.HeaderStyle.Header>
      <S.HeaderStyle.Divisor source={headerImg} resizeMode="contain" />

      <S.HeaderStyle.MenuWrapper>
        {routes.map(el => (
          <S.HeaderStyle.MenuItem key={el.name} onPress={() => el.nav()}>
            <View
              style={{
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={el.icon}
                style={{ width: 18, height: 18 }}
                resizeMode="contain"
              />
            </View>
            <S.HeaderStyle.MenuItemName>{el.name}</S.HeaderStyle.MenuItemName>
          </S.HeaderStyle.MenuItem>
        ))}
      </S.HeaderStyle.MenuWrapper>
      <S.HeaderStyle.Footer>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.app.duotecnologia.com/aplicativo/politica-de-privacidade-15/'
            )
          }
        >
          <S.HeaderStyle.PolicyText>
            Política de privacidade
          </S.HeaderStyle.PolicyText>
        </TouchableOpacity>
      </S.HeaderStyle.Footer>
    </S.DrawerCustomContainer>
  );
};

export default DrawerCustom;
