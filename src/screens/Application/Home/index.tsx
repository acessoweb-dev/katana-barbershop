import React, { useEffect } from 'react';
import * as S from './styles';

import { Image } from 'react-native';
import HomeHeader from 'screens/_headers/Home';
import { Button } from 'components';

import { homeBannerImg } from 'assets';

import { Props } from 'interfaces/routes.interface';
import api from 'services/api';

const mockHomeListing = [
  {
    itemId: 'listing_01',
    itemImage: '',
    itemLegend: 'Novo corte de cabelo para homens está fazendo um sucesso…',
    itemLink: '',
  },
  {
    itemId: 'listing_02',
    itemImage: '',
    itemLegend:
      'Corte kids, saiba como entrar no mundo das crianças! Corte e diversao…',
    itemLink: '',
  },
  {
    itemId: 'listing_03',
    itemImage: '',
    itemLegend:
      'Pesquisa aponta que jovens de 18 a 35 anos costumam a cortar o cabelo e fazer a barba a cada 7 dias…',
    itemLink: '',
  },
  {
    itemId: 'listing_04',
    itemImage: '',
    itemLegend: 'Novo corte de cabelo para homens está fazendo um sucesso…',
    itemLink: '',
  },
  {
    itemId: 'listing_05',
    itemImage: '',
    itemLegend:
      'Corte kids, saiba como entrar no mundo das crianças! Corte e diversao…',
    itemLink: '',
  },
];

const Home = ({ route, navigation }: Props) => {
  return (
    <S.HomeContainer>
      <HomeHeader />
      <S.HomeContent>
        <S.HomeHero>
          <S.HomeTitle>
            Cada {'\n'}detalhe {'\n'}foi {'\n'}pensado {'\n'}para tornar {'\n'}
            sua {'\n'}experiência {'\n'}
            <S.HomeTitleContrast>melhor</S.HomeTitleContrast>
          </S.HomeTitle>
          <S.HomeInputWrapper>
            <Button
              label="AGENDAR AGORA"
              variantType="rounded"
              inverted
              handleOnPress={() => {}}
            />
          </S.HomeInputWrapper>
        </S.HomeHero>

        <S.HomeListing>
          <S.HomeListingHeader>
            <S.HomeListingHeaderText>Para você</S.HomeListingHeaderText>
          </S.HomeListingHeader>
          <S.HomeListingWrapper>
            {mockHomeListing.map(item => (
              <ListingItem
                key={item.itemId}
                postImage={item.itemImage}
                postLegend={item.itemLegend}
                postLink={item.itemLink}
              />
            ))}
          </S.HomeListingWrapper>
        </S.HomeListing>
      </S.HomeContent>

      <S.HomeBackground>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          source={homeBannerImg}
        />
      </S.HomeBackground>
    </S.HomeContainer>
  );
};

export default Home;

// ======================================================== FOR YOU LISTING ITEM

interface IListingItem {
  postImage: any;
  postLegend: string;
  postLink: string;
}

const ListingItem = ({ postImage, postLegend, postLink }: IListingItem) => {
  return (
    <S.ListingItem>
      <S.ListingItemImage>
        {postImage && (
          <Image
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            source={postImage}
          />
        )}
      </S.ListingItemImage>
      <S.ListingItemLegend>{postLegend}</S.ListingItemLegend>
    </S.ListingItem>
  );
};
