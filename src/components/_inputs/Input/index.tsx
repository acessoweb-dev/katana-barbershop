/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import * as S from './styles';

import { Image } from 'react-native';
import { defaultTheme } from 'styles/default';

import { Feather } from '@expo/vector-icons';

// import { masks } from 'utils/masks';

export interface InputProps {
  type: 'text' | 'password';
  variantType: 'default' | 'login';
  label?: string;
  placeholder?: string;
  error?: string;
  mask?: any;
  disabled?: boolean;
  icon?: any;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  value?: string;
  handleOnChange?: (value: string) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  type,
  variantType = 'default',
  label,
  error,
  disabled,
  placeholder = '',
  icon,
  keyboardType = 'default',
  mask,
  value,
  handleOnChange,
}) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  if (type === 'password')
    return (
      <S.InputContainer>
        {label && <S.InputLabel>{label}</S.InputLabel>}
        <S.InputWrapper error={!!error} variantType={variantType}>
          {!!icon && (
            <S.IconContainer>
              <Image style={{ width: 26, height: 26 }} source={icon} />
            </S.IconContainer>
          )}
          <S.Input
            secureTextEntry={showPassword}
            editable={!disabled}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={handleOnChange}
            variantType={variantType}
            placeholderTextColor={
              variantType === 'default' ? 'gray' : defaultTheme.textSecondary
            }
          />
          <S.IconContainer onPress={handleTogglePassword}>
            {showPassword ? (
              <Feather
                name="eye-off"
                size={22}
                color={defaultTheme.inputs.primary.background}
              />
            ) : (
              <Feather
                name="eye"
                size={22}
                color={defaultTheme.inputs.primary.background}
              />
            )}
          </S.IconContainer>
        </S.InputWrapper>
        {error !== '' && <S.InputError>{error}</S.InputError>}
      </S.InputContainer>
    );

  return (
    <S.InputContainer>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputWrapper error={!!error} variantType={variantType}>
        {!!icon && (
          <S.IconContainer>
            <Image style={{ width: 26, height: 26 }} source={icon} />
          </S.IconContainer>
        )}
        <S.Input
          secureTextEntry={false}
          editable={!disabled}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={handleOnChange}
          variantType={variantType}
          placeholderTextColor={
            variantType === 'default' ? 'gray' : defaultTheme.textSecondary
          }
        />
      </S.InputWrapper>
      {error !== '' && <S.InputError>{error}</S.InputError>}
    </S.InputContainer>
  );
};

export default Input;
