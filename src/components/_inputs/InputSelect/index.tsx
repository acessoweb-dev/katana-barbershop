/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import * as S from './styles';
import { defaultTheme } from 'styles/default';
import RNPickerSelect from 'react-native-picker-select';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native';

import { chevronDownIcon } from 'assets';

const width = Dimensions.get('screen').width;

interface Options {
  label: any;
  value: string;
}

export interface InputSelectProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  items: Options[];
  value: Options;
  handleOnChange: (value: string) => void;
}

const InputSelect: React.FunctionComponent<InputSelectProps> = ({
  label,
  placeholder = '',
  disabled,
  error,
  items = [],
  value,
  handleOnChange,
}) => {
  const placeholderProps = {
    label: placeholder,
    value: null,
    color: 'gray',
  };

  return (
    <S.SelectContainer>
      {label && <S.SelectLabel>{label}</S.SelectLabel>}
      <S.SelectWrapper error={!!error}>
        <RNPickerSelect
          placeholder={placeholderProps}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          disabled={disabled}
          value={value}
          onValueChange={handleOnChange}
          items={items}
        />
        <S.IconContainer>
          <Image style={{ width: 20, height: 20 }} source={chevronDownIcon} />
        </S.IconContainer>
      </S.SelectWrapper>
      {error && <S.SelectError>{error}</S.SelectError>}
    </S.SelectContainer>
  );
};

export default InputSelect;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: width,
    height: 55,
    fontSize: RFValue(14),
    color: defaultTheme.input,
  },
  inputAndroid: {
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: width,
    height: 55,
    fontSize: RFValue(14),
    color: defaultTheme.input,
  },
});
