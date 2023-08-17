import styled, { DefaultTheme } from 'styled-components/native';

export const BackHeaderContainer = styled.View`
  justify-content: center;
  background-color: transparent;
  height: 60px;
`;

export const BackHeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const BackHeaderTitle = styled.Text`
  font-weight: 400;
  text-align: center;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  font-family: 'Agrandir';
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;
