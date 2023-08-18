import styled, { css, DefaultTheme } from 'styled-components/native';

export const SelectContainer = styled.View`
  align-self: stretch;
`;

interface FieldProps {
  error?: boolean;
  theme: DefaultTheme;
}

export const SelectLabel = styled.Text<FieldProps>`
  padding: 0 0 5px 10px;
  font-family: 'Agrandir';
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[15]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
`;

export const SelectWrapper = styled.View<FieldProps>`
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  column-gap: 5px;
  border-radius: 15px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.input};

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.error};
    `}
`;

export const SelectError = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
  color: ${({ theme }) => theme.error};
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 10px;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
