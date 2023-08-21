import React, { useState } from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { TouchableOpacity } from 'react-native';
import { Button, Input } from 'components';

import { Props } from 'interfaces/routes.interface';

const ChangeCredentials = ({ route, navigation }: Props) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleChangePhone = (value: any) => setPhoneValue(value);
  const handleChangeEmail = (value: any) => setEmailValue(value);
  const handleChangePassword = (value: any) => setPasswordValue(value);

  const handleChangeData = () => {};

  return (
    <S.ChangeCredentialsContainer>
      <BackHeader title="Meu Perfil" />
      <S.ChangeCredentialsContent
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <S.AccountHeader>Olá,{'\n'}Giovanni Santos</S.AccountHeader>
        <S.AccountForm>
          <Input
            type="text"
            keyboardType="email-address"
            label="E-mail:"
            value={emailValue}
            handleOnChange={handleChangeEmail}
          />
          <Input
            type="text"
            keyboardType="number-pad"
            label="Celular:"
            value={phoneValue}
            handleOnChange={handleChangePhone}
          />
          <Input
            type="password"
            keyboardType="default"
            label="Senha:"
            value={passwordValue}
            handleOnChange={handleChangePassword}
          />

          <S.ChangeDataSubmit>
            <Button
              inverted
              variantType="rounded"
              label="Alterar dados"
              handleOnPress={handleChangeData}
            />
          </S.ChangeDataSubmit>
        </S.AccountForm>
        <S.DeleteAccount>
          <S.DeleteAccountLabel>Excluir conta</S.DeleteAccountLabel>
        </S.DeleteAccount>
        {/* <S.ChangeCredentialsWrapper>
        </S.ChangeCredentialsWrapper> */}
      </S.ChangeCredentialsContent>
    </S.ChangeCredentialsContainer>
  );
};

export default ChangeCredentials;
