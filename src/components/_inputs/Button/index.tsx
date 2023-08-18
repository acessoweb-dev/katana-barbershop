import React from 'react';
import * as S from './styles';
import { defaultTheme } from 'styles/default';

import { ActivityIndicator } from 'react-native';

export interface ButtonProps {
  label: string;
  variantType?: 'default' | 'rounded';
  fullWidth?: boolean;
  small?: boolean;
  inverted?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  variantType = 'default',
  fullWidth = false,
  small = false,
  inverted = false,
  loading,
  disabled,
  onPress,
}) => {
  return (
    <S.Button
      inverted={inverted}
      fullWidth={fullWidth}
      small={small}
      loading={loading}
      disabled={!!disabled}
      variantType={variantType}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator
          color={inverted ? 'white' : defaultTheme.inputs.primary.background}
        />
      ) : (
        <S.ButtonLabel
          small={small}
          inverted={inverted}
          variantType={variantType}
        >
          {label}
        </S.ButtonLabel>
      )}
    </S.Button>
  );
};

export default Button;
