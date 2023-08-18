import styled, { css, DefaultTheme } from 'styled-components/native';

interface FieldProps {
  variantType: 'default' | 'login';
  removeRadius?: boolean;
  error: boolean;
  theme: DefaultTheme;
}

interface InputProps {
  variantType: 'default' | 'login';
}

export const InputContainer = styled.View`
  align-self: stretch;
`;

export const InputLabel = styled.Text`
  padding: 0 0 5px 10px;
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[15]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
`;

export const InputWrapper = styled.View<FieldProps>`
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  column-gap: 5px;

  ${({ variantType, theme }) => {
    if (variantType === 'default') {
      return css`
        border-radius: 15px;
        background-color: ${theme.input};
      `;
    }
    if (variantType === 'login') {
      return css`
        border-radius: 100px;
        background-color: ${theme.inputLogin};
      `;
    }
  }}

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.error};
    `}
`;

export const Input = styled.TextInput<InputProps>`
  flex: 1;
  padding: 0px 5px;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.input};

  ${({ variantType, theme }) => {
    if (variantType === 'default') {
      return css`
        height: 60px;
        color: ${theme.inputLogin};
      `;
    }
    if (variantType === 'login') {
      return css`
        height: 45px;
        color: ${theme.text};
      `;
    }
  }}
`;

export const InputError = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
  color: ${({ theme }) => theme.error};
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
