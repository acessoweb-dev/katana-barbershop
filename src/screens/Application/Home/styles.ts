import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const HomeContainer = styled(ContainerPage)`
  position: relative;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.backgroundApp};
`;

export const HomeContent = styled(ContentScroll)`
  z-index: 10;
`;

export const HomeHero = styled.View`
  row-gap: 10px;
  padding: 0 20px;
`;

export const HomeTitle = styled.Text`
  font-family: 'LeagueGothic';
  font-size: ${RFValue(40)}px;
  line-height: ${RFValue(40)}px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
`;

export const HomeTitleContrast = styled(HomeTitle)`
  font-size: ${RFValue(70)}px;
  line-height: ${RFValue(100)}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
`;

export const HomeInputWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const HomeBackground = styled.View`
  z-index: 5;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const HomeListing = styled.View`
  margin-top: 30px;
`;

export const HomeListingHeader = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const HomeListingHeaderText = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};

  padding: 0 10px 5px 20px;

  border-bottom-width: 1px;
  border-bottom-color: white;
`;

export const HomeListingWrapper = styled.View`
  padding: 0 20px 20px 20px;
  row-gap: 10px;
`;

// ======================================================== FOR YOU LISTING ITEM

export const ListingItem = styled.View`
  flex-direction: row;
  column-gap: 15px;
`;

export const ListingItemImage = styled.View`
  width: 140px;
  height: 80px;
  border-radius: 8px;

  background-color: black;
`;

export const ListingItemLegend = styled.Text`
  flex: 1;
  font-family: 'RedHatDisplay';
  text-transform: uppercase;
  font-style: italic;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
`;
