import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const SuggestionsContainer = styled(ContainerPage)`
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const SuggestionsContent = styled(ContentScroll)``;

export const Balloon = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin: 40px 0 60px 0;
  padding: 0 30px 0 5px;
`;

export const BalloonBackground = styled.View`
  flex: 1;
  border-radius: 10px;

  padding: 10px 15px;
  background-color: ${({ theme }) => theme.background};
`;

export const BalloonIndicator = styled.View`
  bottom: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent ${({ theme }) => theme.background}
    transparent;
`;

export const BalloonText = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  line-height: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[20]};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;

export const SuggestionsWrapper = styled.View`
  padding: 0 30px;
`;
