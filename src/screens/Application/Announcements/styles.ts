import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const AnnouncementsContainer = styled(ContainerPage)`
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const AnnouncementsContent = styled(ContentScroll)`
  padding: 0 30px;
`;

export const AnnouncementsBanner = styled.View`
  width: 100%;
  height: 180px;
  margin-bottom: 40px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.background};
`;

export const AnnouncementsListing = styled.View`
  row-gap: 25px;
  padding-bottom: 20px;
`;

// ======================================================== ANNOUNCEMENTS ITEM

export const ListingItem = styled.View`
  flex-direction: row;
  column-gap: 15px;
`;

export const ListingItemImage = styled.View`
  width: 140px;
  height: 80px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.background};
`;

export const ListingItemLegend = styled.Text`
  flex: 1;
  font-family: 'RedHatDisplay';
  text-transform: uppercase;
  font-style: italic;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;
