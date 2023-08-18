import styled, { DefaultTheme } from 'styled-components/native';
import { ContainerPage, ContentScroll } from 'styles/commonStyles';

export const SchedulingContainer = styled(ContainerPage)`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.backgroundApp};
`;

export const SchedulingContent = styled(ContentScroll)`
  padding: 0 20px;
`;

export const SchedulingSelects = styled.View`
  row-gap: 15px;
`;

export const SchedulingSubmitWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;
