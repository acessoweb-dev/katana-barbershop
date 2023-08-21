import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Image } from 'react-native';

import { logoImg } from 'assets';

import { Props } from 'interfaces/routes.interface';

const title = 'Barbearia Katana';
const legend =
  'História DESDE DE 2015 Foi criada no bairro Boa vista, pelo empreendedor visionário Thiago Henrique no qual era o único barbeiro. Iniciou com o nome de Salão Masculino New Style, com intuito de trazer as melhores técnicas e produtos no segmento de Barbershop. Fomos crescendo e aprimorando a cada dia até que, em 2018, a barbearia passou por uma reforma ampliando seu espaço e serviços, contando com três colaboradores trabalhando em equipe, e assim ganhamos uma nova identidade recebendo o nome de BARBEARIA KATANA. Hoje a BARBEARIA KATANA tem o compromisso de continuar na nossa busca diária para entregarmos a melhor experiência para os nossos clientes. Seguindo a nossa visão de tornar a sua experiência sempre melhor!!';

const AboutUs = ({ route, navigation }: Props) => {
  return (
    <S.AboutUsContainer>
      <BackHeader title="Sobre Nós" />
      <S.AboutUsContent>
        <S.AboutUsImage>
          <Image style={{ width: 220, height: 220 }} source={logoImg} />
        </S.AboutUsImage>
        <S.AboutUsTitle>{title}</S.AboutUsTitle>
        <S.AboutUsText>{legend}</S.AboutUsText>
      </S.AboutUsContent>
    </S.AboutUsContainer>
  );
};

export default AboutUs;
