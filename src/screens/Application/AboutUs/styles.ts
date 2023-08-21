import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const AboutUsContainer = styled(ContainerPage)`
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const AboutUsContent = styled(ContentScroll)`
  padding: 0 30px;
`;

export const AboutUsImage = styled.View`
  align-items: center;
  margin-bottom: 35px;
`;

export const AboutUsTitle = styled.Text`
  margin-bottom: 15px;
  font-weight: bold;
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  text-align: center;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;

export const AboutUsText = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[16]};
  line-height: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  text-align: justify;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;
