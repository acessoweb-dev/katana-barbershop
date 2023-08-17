import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Suggestions = ({ route, navigation }: Props) => {
  return (
    <S.SuggestionsContainer>
      <BackHeader />
      <S.SuggestionsContent>
        <Text>Suggestions</Text>
      </S.SuggestionsContent>
    </S.SuggestionsContainer>
  );
};

export default Suggestions;
