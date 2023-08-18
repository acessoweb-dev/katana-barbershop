import styled, { DefaultTheme } from 'styled-components/native';
import { Container as ContainerDefault } from 'styles/commonStyles';

interface BoxProps {
  active: boolean;
}

export const RegisterContainer = styled(ContainerDefault)`
  /* justify-content: center;
  align-items: center; */
  padding: 0px 15px;
  margin-bottom: 15px;
`;

export const Box = styled.TouchableOpacity<BoxProps>`
  padding: 20px 15px;
  border-radius: 15px;
  width: 150px;
  align-items: center;
  background-color: ${({ active }: { active: boolean }) =>
    active ? '#B9D8E3' : '#E4E6E6'};
`;
export const BoxTitle = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
`;
