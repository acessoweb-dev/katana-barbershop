import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Link } from 'components';

import { homeIcon, userIcon } from 'assets';

import { Props } from 'interfaces/routes.interface';

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
            <Link
              key={link.linkId}
              label={link.linkLabel}
              icon={link.linkIcon}
              handleOnPress={() => {}}
            />
          ))}
        </S.UsefulLinksListing>
      </S.UsefulLinksContent>
    </S.UsefulLinksContainer>
  );
};

export default UsefulLinks;
