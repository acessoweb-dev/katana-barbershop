import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const ServicesContainer = styled(ContainerPage)`
  position: relative;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const ServicesContent = styled(ContentScroll)`
  position: relative;
  padding: 0 30px;
  width: 100%;
`;

export const ServicesMainCta = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  padding: 10px 30px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary};
`;

export const ServicesMainCtaLabel = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  text-align: center;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;

export const ServicesListing = styled.View`
  row-gap: 15px;
  padding-bottom: 20px;
`;

// =================================================== SERVICE CARD

export const ServiceCard = styled.View`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.background};
`;

export const ServiceCardStyles = {
  Banner: styled.View`
    z-index: 5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  Content: styled.View`
    z-index: 10;
    flex: 1;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
  `,
  Title: styled.Text`
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
    letter-spacing: 4px;
    color: #fff;
  `,
  Price: styled.Text`
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
    letter-spacing: 2px;
    color: ${({ theme }) => theme.inputs.secondary.background};
  `,
  Cta: styled.View`
    margin-top: 6px;
    padding: 5px 10px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.primary};
  `,
  CtaLabel: styled.Text`
    letter-spacing: 2px;
    color: ${({ theme }) => theme.inputs.secondary.background};
  `,
};
