import styled, { DefaultTheme } from 'styled-components/native';
import { Container, ContentScroll } from 'styles/commonStyles';

export const LoginContainer = styled(Container)`
  position: relative;
  flex: 1;
  padding: 30px 40px;
`;

export const LoginWrapper = styled(ContentScroll)``;

export const LoginHeader = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const LoginLogo = styled.View`
  margin-bottom: 30px;
`;

export const LoginTitle = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[26]};
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
`;

export const LoginInputsWrapper = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const LoginNavigationWrapper = styled.View`
  flex-direction: column;
  row-gap: 8px;
  margin-top: 10px;
`;

export const LoginNavigationItem = styled.TouchableOpacity``;

export const LoginNavigationItemLabel = styled.Text`
  text-align: center;
  color: white;
`;

export const LoginWarning = styled.Text`
  text-align: center;
  color: white;
`;
