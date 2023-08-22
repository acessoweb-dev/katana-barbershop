import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const UsefulLinksContainer = styled(ContainerPage)`
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const UsefulLinksContent = styled(ContentScroll)`
  padding: 0 30px;
`;

export const UsefulLinksListing = styled.View`
  row-gap: 25px;
  padding-bottom: 20px;
`;
