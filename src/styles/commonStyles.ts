import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// ----------- CONTAINER ------------

export const ContainerPage = styled.View`
  flex: 1;
  gap: 15px;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

// ------------ CONTENT ------------

export const ContentPage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  margin: 15px 0px;
`;

export const Content = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const ContentScroll = styled(KeyboardAwareScrollView)`
  flex: 1;
`;
