import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Link } from 'components';

import { whatsappIcon } from 'assets';
import { Props } from 'interfaces/routes.interface';

const Suggestions = ({ route, navigation }: Props) => {
  return (
    <S.SuggestionsContainer>
      <BackHeader title="Sugestões" />
      <S.SuggestionsContent>
        <S.Balloon>
          <S.BalloonIndicator />
          <S.BalloonBackground>
            <S.BalloonText>
              Se você tem alguma sugestão ou reclamação, fale conosco pelo link
              abaixo:
            </S.BalloonText>
          </S.BalloonBackground>
        </S.Balloon>

        <S.SuggestionsWrapper>
          <Link
            label="Sugestões"
            icon={whatsappIcon}
            handleOnPress={() => {}}
          />
        </S.SuggestionsWrapper>
      </S.SuggestionsContent>
    </S.SuggestionsContainer>
  );
};

export default Suggestions;
