import React, { useEffect, useRef } from 'react';
import * as S from './styles';

import { useWindowDimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

import BackHeader from 'screens/_headers/Back';
import { Image } from 'react-native';

import { useData } from 'providers/DataContext';

import { Props } from 'interfaces/routes.interface';

const AboutUs = ({ route, navigation }: Props) => {
  const { aboutusData, aboutusLoading } = useData();

  const { width } = useWindowDimensions();

  useEffect(() => {
    console.log(aboutusData?.imagem);
  }, [aboutusData]);

  const tagsStyles = {
    span: {
      fontFamily: 'Agrandir',
      color: 'white',
      lineHeight: 19,
      textAlign: 'justify',
    },
  };

  const systemFonts = [...defaultSystemFonts, 'Agrandir'];

  return (
    <S.AboutUsContainer>
      <BackHeader title="Sobre Nós" />
      <S.AboutUsContent>
        <S.AboutUsImage>
          <Image
            resizeMode="cover"
            style={{ width: 220, height: 220, borderRadius: 220 }}
            source={{
              uri: `https://duotecnologia.com/app/images/sobre-nos/${aboutusData?.imagem}`,
            }}
          />
        </S.AboutUsImage>
        <S.AboutUsTitle>Barbearia Katana</S.AboutUsTitle>
        <S.AboutUsText>
          <RenderHtml
            contentWidth={width}
            source={{
              html: `<div>${aboutusData?.descricao}</div>`,
            }}
            tagsStyles={tagsStyles}
            ignoredStyles={['color', 'fontFamily']}
            systemFonts={systemFonts}
          />
        </S.AboutUsText>
      </S.AboutUsContent>
    </S.AboutUsContainer>
  );
};

export default AboutUs;
