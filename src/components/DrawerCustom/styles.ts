import styled, { DefaultTheme } from 'styled-components/native';

export const DrawerCustomContainer = styled.View`
  flex: 1;
  padding: 15px 0px;
  background-color: #1a486a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderStyle = {
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[26]};
    color: #fff;
    padding: 0px 15px;
    font-family: 'Agrandir';
  `,
  Content: styled.View``,
  Footer: styled.View`
    margin-top: auto;
    align-items: center;
  `,
  Center: styled.View`
    margin-top: 10px;
    padding-left: 5px;
  `,
  Img: styled.Image`
    height: 230px;
    width: 100%;
  `,
  Text: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
    color: #fff;
    font-family: 'Agrandir';
  `,
  Item: styled.TouchableOpacity`
    padding: 2px 0px;
    align-items: center;
    flex-direction: row;
  `,
  Name: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
    font-family: 'Agrandir';
    color: #fff;
  `,
};
