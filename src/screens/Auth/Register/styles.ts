import styled, { DefaultTheme } from 'styled-components/native';
import { ContentScroll } from 'styles/commonStyles';

export const RegisterContainer = styled(ContentScroll)``;

export const RegisterWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
`;

export const RegisterTitle = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[26]};
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
  margin-bottom: 60px;
`;

export const RegisterInputsWrapper = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const RegisterSubmit = styled.View`
  margin-top: 40px;
`;
