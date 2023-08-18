import { RFValue } from 'react-native-responsive-fontsize';

export interface DefaultTheme {
  primary: string;
  text: string;
  textPrimary: string;
  textSecondary: string;
  header: string;
  background: string;
  backgroundApp: string;
  input: string;
  inputLogin: string;
  error: string;
  success: string;
  placeholder: string;
  warning: string;
  inputs: {
    primary: {
      foreground: string;
      background: string;
    };
    secondary: {
      foreground: string;
      background: string;
    };
  };
  fonts: {
    size: {
      10: string;
      12: string;
      14: string;
      15: string;
      16: string;
      18: string;
      20: string;
      22: string;
      26: string;
      30: string;
    };
  };
}

export const defaultTheme: DefaultTheme = {
  primary: '#C6942A',
  text: '#000000',
  textPrimary: 'rgba(255, 255, 255, 0.98)',
  textSecondary: '#737373',
  background: '#090F0F',
  backgroundApp: '#282929',
  error: '#FF5630',
  header: 'transparent',
  input: 'rgba(255, 255, 255, 0.17)',
  inputLogin: '#F9FAFB',
  success: '#20A612',
  warning: '#FF8F35',
  placeholder: '#E2E2E2',
  inputs: {
    primary: {
      foreground: '#C6942A',
      background: '#C6942A',
    },
    secondary: {
      foreground: '#FFFFFF',
      background: '#FFFFFF',
    },
  },
  fonts: {
    size: {
      10: `${RFValue(10)}px`,
      12: `${RFValue(12)}px`,
      14: `${RFValue(14)}px`,
      15: `${RFValue(15)}px`,
      16: `${RFValue(16)}px`,
      18: `${RFValue(18)}px`,
      20: `${RFValue(20)}px`,
      22: `${RFValue(22)}px`,
      26: `${RFValue(26)}px`,
      30: `${RFValue(30)}px`,
    },
  },
};
