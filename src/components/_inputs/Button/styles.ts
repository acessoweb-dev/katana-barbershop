import styled, { css, DefaultTheme } from 'styled-components/native';
// import { DefaultTheme } from 'styles/default';

interface ButtonProps {
  variantType: 'default' | 'rounded';
  fullWidth?: boolean;
  inverted?: boolean;
  small?: boolean;
  loading?: boolean;
  disabled: boolean;
  theme: DefaultTheme;
}

interface LabelProps {
  variantType?: 'default' | 'rounded';
  inverted?: boolean;
  small?: boolean;
  theme: DefaultTheme;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({ small }) => (small ? '40px' : '50px')};
  padding: 0px 45px;
  border-radius: ${({ variantType }) =>
    variantType === 'rounded' ? '100px' : '15px'};

  ${({ disabled, loading }) => (disabled || loading) && 'opacity:  0.5;'}
  ${({ inverted, theme }) => {
    if (inverted)
      return css`
        background-color: ${theme.inputs.primary.background};
      `;

    return css`
      height: 55px;
      border-width: 1px;
      background-color: ${theme.inputs.tertiary.background};
    `;
  }}
`;

export const ButtonLabel = styled.Text<LabelProps>`
  font-family: 'Agrandir';
  font-size: ${({ small, theme }) =>
    small ? theme.fonts.size[14] : theme.fonts.size[18]};

  ${({ theme, inverted }) => {
    if (inverted)
      return css`
        font-weight: bold;
        color: ${theme.inputs.secondary.background};
      `;

    return css`
      font-weight: 400;
      letter-spacing: 3px;
      color: ${theme.inputs.primary.background};
    `;
  }}
`;
