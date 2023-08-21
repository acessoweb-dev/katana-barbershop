import styled, { DefaultTheme } from 'styled-components/native';

export const Link = styled.TouchableOpacity`
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
    width: 28px;
    height: 28px;
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
