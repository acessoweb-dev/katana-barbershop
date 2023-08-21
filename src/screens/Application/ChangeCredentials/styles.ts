import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const ChangeCredentialsContainer = styled(ContainerPage)`
  background-color: ${({ theme }) => theme.backgroundApp};
`;

export const ChangeCredentialsContent = styled(ContentScroll)`
  padding: 0 30px 20px 30px;
`;

export const ChangeCredentialsWrapper = styled.View`
  flex: 1;
  border-width: 2px;
  border-color: red;
`;

export const AccountHeader = styled.Text`
  margin-bottom: 30px;
  text-align: center;

  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[22]};
  line-height: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[35]};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;

export const AccountForm = styled.View`
  margin-bottom: auto;
`;

export const ChangeDataSubmit = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const DeleteAccount = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const DeleteAccountLabel = styled.Text`
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.inputs.secondary.background};
`;
