import React, { useState } from 'react';
import * as S from './styles';
import { Image } from 'react-native';

import { Button, Input } from 'components';
import { authIcon, passwordIcon, logoTransparentImg } from 'assets';

import { Props } from 'interfaces/routes.interface';

const Login = ({ route, navigation }: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleChangeUser = (value: any) => {
    setUserValue(value);
  };

  const handleChangePassword = (value: any) => {
    setPasswordValue(value);
  };

  const handleSubmitLogin = () => {};

  // const toast = useToast();

  // const handleSubmitLogin = async (formData: UserLogin) => {
  //   try {
  //     setLoading(true);

  //     const { data: response } = await api.post('/login.php', formData);
  //     console.log(response);

  //     if (response.error) {
  //       toast.errorToast(response.error);
  //       return;
  //     }

  //     useUserStore.getState().setUser(response.data);
  //     useAuthStore.getState().setToken(response.token);

  //     toast.successToast('Login realizado com sucesso !');
  //   } catch (error) {
  //     console.log(error);

  //     const typedError = error as ResponseError;
  //     if (axios.isAxiosError(error)) {
  //       toast.errorToast(typedError?.response?.data?.message);
  //     } else {
  //       toast.errorToast('Erro ao efetuar o login');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <S.LoginContainer>
      <S.LoginWrapper
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          rowGap: 40,
        }}
      >
        <S.LoginHeader>
          <S.LoginLogo>
            <Image
              style={{ width: 120, height: 120 }}
              source={logoTransparentImg}
            />
          </S.LoginLogo>
          <S.LoginTitle>Login</S.LoginTitle>
        </S.LoginHeader>

        <S.LoginInputsWrapper>
          <Input
            type="text"
            variantType="login"
            placeholder="Usuário"
            icon={authIcon}
            value={userValue}
            handleOnChange={handleChangeUser}
          />
          <Input
            type="password"
            variantType="login"
            placeholder="Senha"
            icon={passwordIcon}
            value={passwordValue}
            handleOnChange={handleChangePassword}
          />
          <S.LoginNavigationWrapper>
            <S.LoginNavigationItem
              onPress={() => navigation.navigate('Register')}
            >
              <S.LoginNavigationItemLabel>
                Esqueci minha senha
              </S.LoginNavigationItemLabel>
            </S.LoginNavigationItem>
            <S.LoginNavigationItem
              onPress={() => navigation.navigate('Register')}
            >
              <S.LoginNavigationItemLabel>
                Não tem uma conta? Cadastre-se
              </S.LoginNavigationItemLabel>
            </S.LoginNavigationItem>
          </S.LoginNavigationWrapper>
        </S.LoginInputsWrapper>

        <Button
          variantType="rounded"
          inverted
          fullWidth
          label="Entrar"
          handleOnPress={handleSubmitLogin}
        />

        <S.LoginWarning>
          Faça login para acessar todos os recursos do aplicativo
        </S.LoginWarning>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default Login;
