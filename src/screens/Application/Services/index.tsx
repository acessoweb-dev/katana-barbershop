import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Image } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const mockServices = [
  {
    serviceId: 'service-01',
    serviceTitle: 'Barba econômico',
    servicePrice: 'R4 49,90',
    serviceLink: '',
    serviceBanner: '',
  },
  {
    serviceId: 'service-02',
    serviceTitle: 'Barba econômico',
    servicePrice: 'R4 49,90',
    serviceLink: '',
    serviceBanner: '',
  },
  {
    serviceId: 'service-04',
    serviceTitle: 'Barba econômico',
    servicePrice: 'R4 49,90',
    serviceLink: '',
    serviceBanner: '',
  },
  {
    serviceId: 'service-042',
    serviceTitle: 'Barba econômico',
    servicePrice: 'R4 49,90',
    serviceLink: '',
    serviceBanner: '',
  },
  {
    serviceId: 'service-054',
    serviceTitle: 'Barba econômico',
    servicePrice: 'R4 49,90',
    serviceLink: '',
    serviceBanner: '',
  },
];

const Services = ({ route, navigation }: Props) => {
  return (
    <S.ServicesContainer>
      <BackHeader title="Serviços" />
      <S.ServicesContent>
        <S.ServicesListing>
          {mockServices.map(service => (
            <ServicesCard
              key={service.serviceId}
              serviceTitle={service.serviceTitle}
              servicePrice={service.servicePrice}
              serviceLink={service.serviceLink}
              serviceBanner={service.serviceBanner}
            />
          ))}
        </S.ServicesListing>
      </S.ServicesContent>
      <S.ServicesMainCta
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 20,
        }}
      >
        <S.ServicesMainCtaLabel>
          Barbearia por {'\n'} assinatura
        </S.ServicesMainCtaLabel>
      </S.ServicesMainCta>
    </S.ServicesContainer>
  );
};

export default Services;

// =================================================== SERVICE CARD

interface IServicesCard {
  serviceTitle: string;
  servicePrice: string;
  serviceLink: string;
  serviceBanner: any;
}

const ServicesCard = ({
  serviceTitle,
  servicePrice,
  serviceLink,
  serviceBanner,
}: IServicesCard) => {
  return (
    <S.ServiceCard>
      <S.ServiceCardStyles.Banner>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          source={serviceBanner}
        />
      </S.ServiceCardStyles.Banner>
      <S.ServiceCardStyles.Content>
        <S.ServiceCardStyles.Title>{serviceTitle}</S.ServiceCardStyles.Title>
        <S.ServiceCardStyles.Price>{servicePrice}</S.ServiceCardStyles.Price>
        <S.ServiceCardStyles.Cta>
          <S.ServiceCardStyles.CtaLabel>Agendar</S.ServiceCardStyles.CtaLabel>
        </S.ServiceCardStyles.Cta>
      </S.ServiceCardStyles.Content>
    </S.ServiceCard>
  );
};
