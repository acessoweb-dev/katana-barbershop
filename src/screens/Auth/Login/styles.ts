import styled, { DefaultTheme } from 'styled-components/native';
import { Container as ContainerDefault } from 'styles/commonStyles';

export const LoginContainer = styled(ContainerDefault)`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundAuth = styled.Image`
  position: absolute;
  height: 300px;
  width: 100%;
  top: -60px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
  text-align: center;
`;

export const ImageAuth = styled.Image`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 10px;
`;
