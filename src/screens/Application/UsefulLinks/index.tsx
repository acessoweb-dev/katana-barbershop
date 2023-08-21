import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';

import { Props } from 'interfaces/routes.interface';
import { homeIcon, userIcon } from 'assets';

const mockLinks = [
  {
    linkId: 'link-01',
    linkIcon: homeIcon,
    linkLabel: 'Instagram',
  },
  {
    linkId: 'link-02',
    linkIcon: userIcon,
    linkLabel: 'Avalie-nos',
  },
  {
    linkId: 'link-40',
    linkIcon: '',
    linkLabel: 'Outro',
  },
];

const UsefulLinks = ({ route, navigation }: Props) => {
  return (
    <S.UsefulLinksContainer>
      <BackHeader title="Links Úteis" />
      <S.UsefulLinksContent>
        <S.UsefulLinksListing>
          {mockLinks.map(link => (
            <S.UsefulLink key={link.linkId}>
              {!!link.linkIcon && (
                <S.LinkStyles.IconContainer>
                  <S.LinkStyles.Icon source={link.linkIcon} />
                </S.LinkStyles.IconContainer>
              )}
              <S.LinkStyles.Label>{link.linkLabel}</S.LinkStyles.Label>
            </S.UsefulLink>
          ))}
        </S.UsefulLinksListing>
      </S.UsefulLinksContent>
    </S.UsefulLinksContainer>
  );
};

export default UsefulLinks;
