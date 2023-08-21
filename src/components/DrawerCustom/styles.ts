import styled, { DefaultTheme } from 'styled-components/native';

export const DrawerCustomContainer = styled.View`
  flex: 1;
  padding: 25px 4px 25px 0;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderStyle = {
  Header: styled.View`
    flex-direction: row;
    justify-content: center;
  `,
  LogoImg: styled.Image`
    width: 90px;
    height: 90px;
  `,
  Divisor: styled.Image`
    height: 40px;
    width: 100%;
  `,
  MenuWrapper: styled.View`
    margin-top: 10px;
    padding-left: 5px;
    row-gap: 10px;
  `,
  MenuItem: styled.TouchableOpacity`
    padding: 5px 0px;
    align-items: center;
    flex-direction: row;
  `,
  MenuItemName: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
    font-family: 'Agrandir';
    color: #fff;
  `,
  Footer: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10px;
    padding-left: 5px;
  `,
  PolicyText: styled.Text`
    font-family: 'Agrandir';
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[10]};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
  `,
};
