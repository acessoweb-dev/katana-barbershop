import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const UsefulLinksContainer = styled(ContainerPage)``;

export const UsefulLinksContent = styled(ContentScroll)`
  padding: 0 20px;
`;

export const UsefulLinksListing = styled.View`
  row-gap: 25px;
  padding-bottom: 20px;
`;

export const UsefulLink = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary};
`;

export const LinkStyles = {
  IconContainer: styled.View`
    position: absolute;
    left: 30px;
  `,
  Icon: styled.Image`
    width: 25px;
    height: 25px;
  `,
  Label: styled.Text`
    flex: 1;
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
    letter-spacing: 3px;
    text-align: center;
    color: ${({ theme }) => theme.inputs.tertiary.background};
  `,
};
