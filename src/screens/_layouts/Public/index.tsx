import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { Container, Content } from 'styles/commonStyles';
import { defaultTheme } from 'styles/default';

const Public = ({ children }: { children: React.ReactElement }) => {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor(defaultTheme.primary);
    } else {
      StatusBar.setBarStyle('dark-content', true);
    }
  }, []);

  return <Container>{children}</Container>;
};
export default Public;
