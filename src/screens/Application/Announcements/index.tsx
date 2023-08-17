import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Announcements = ({ route, navigation }: Props) => {
  return (
    <S.AnnouncementsContainer>
      <BackHeader />
      <S.AnnouncementsContent>
        <Text>Announcements</Text>
      </S.AnnouncementsContent>
    </S.AnnouncementsContainer>
  );
};

export default Announcements;
