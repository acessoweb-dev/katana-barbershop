import React from 'react';

import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const LoadFonts = ({ children }: { children: React.ReactElement }) => {
  const [fontsLoaded] = useFonts({
    Agrandir: require('assets/fonts/Agrandir-Regular.otf'),
    RedHatDisplay: require('assets/fonts/RedHatDisplay-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

export default LoadFonts;
