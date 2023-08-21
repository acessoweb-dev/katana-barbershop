import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const ProductsContainer = styled(ContainerPage)``;

export const ProductsContent = styled(ContentScroll)`
  padding: 0 20px;
`;

export const ProductsListing = styled.View`
  row-gap: 10px;
`;

// =================================================== PRODUCT CARD

export const ProductCard = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  column-gap: 15px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.backgroundCard};
`;

export const ProductCardStyles = {
  Banner: styled.View`
    width: 160px;
    height: 160px;
    border-radius: 15px;
    overflow: hidden;

    background-color: ${({ theme }) => theme.backgroundApp};
  `,
  Content: styled.View`
    flex: 1;
    padding: 10px 0;
    row-gap: 10px;
  `,
  Title: styled.Text`
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
    letter-spacing: 3px;
    color: #fff;
  `,
  Price: styled.Text`
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
    font-weight: bold;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.inputs.secondary.background};
  `,
};
