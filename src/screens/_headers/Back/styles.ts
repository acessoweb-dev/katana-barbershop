import styled, { DefaultTheme } from 'styled-components/native';

export const BackHeaderContainer = styled.View`
  justify-content: center;
  background-color: transparent;
`;

export const BackHeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const BackHeaderTitle = styled.Text`
  font-family: 'Agrandir';
  text-align: center;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[20]};
  font-weight: 300;
  letter-spacing: 2px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
`;
