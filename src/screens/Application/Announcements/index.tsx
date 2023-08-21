import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Image } from 'react-native';

import { Props } from 'interfaces/routes.interface';

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
  {
    itemId: 'listing_044',
    itemImage: '',
    itemLegend: 'Novo corte de cabelo para homens está fazendo um sucesso…',
    itemLink: '',
  },
  {
    itemId: 'listing_055',
    itemImage: '',
    itemLegend:
      'Corte kids, saiba como entrar no mundo das crianças! Corte e diversao…',
    itemLink: '',
  },
];

const Announcements = ({ route, navigation }: Props) => {
  return (
    <S.AnnouncementsContainer>
      <BackHeader title="Comunicados" />
      <S.AnnouncementsContent>
        <S.AnnouncementsBanner>
          {/* <Image
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            source={''}
          /> */}
        </S.AnnouncementsBanner>
        <S.AnnouncementsListing>
          {mockHomeListing.map(item => (
            <ListingItem
              key={item.itemId}
              postImage={item.itemImage}
              postLegend={item.itemLegend}
              postLink={item.itemLink}
            />
          ))}
        </S.AnnouncementsListing>
      </S.AnnouncementsContent>
    </S.AnnouncementsContainer>
  );
};

export default Announcements;

// ======================================================== ANNOUNCEMENTS ITEM

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
