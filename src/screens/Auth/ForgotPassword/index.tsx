import React from 'react';
import * as S from './styles';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const ForgotPassword = ({ route, navigation }: Props) => {
  // const [loading, setLoading] = React.useState<boolean>(false);

  // const toast = useToast();

  // const handleSubmitLogin = async (formData: UserForgotPassword) => {
  //   try {
  //     setLoading(true);

  //     var form_data: any = new FormData();

  //     form_data.append('email', formData.email);

  //     const { data: response } = await api.post(
  //       '/esqueciSenha.php',
  //       form_data,
  //       {
  //         headers: {
  //           'content-type': 'multipart/form-data',
  //         },
  //       }
  //     );
  //     if (response.error) {
  //       toast.errorToast(response.error);
  //       return;
  //     }

  //     toast.successToast(
  //       'Email enviado!',
  //       'Um email com link de recuperação foi enviado!'
  //     );
  //   } catch (error) {
  //     const typedError = error as ResponseError;
  //     if (axios.isAxiosError(error)) {
  //       toast.errorToast(typedError?.response?.data?.message);
  //     } else {
  //       toast.errorToast('Erro ao solicitar senha');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<UserForgotPassword>({
  //   defaultValues: {
  //     email: '',
  //   },
  //   resolver: yupResolver(forgotPasswordSchema),
  // });

  return (
    <S.ForgotPasswordContainer>
      <Text>ForgotPassword</Text>
      {/* <BackgroundAuth source={bannerAuth} resizeMode="contain" />
      <ImageAuth source={logoauth} resizeMode="contain" />
      <Column style={{ paddingHorizontal: 50, gap: 25 }}>
        <TitleAuth>Esqueci minha senha</TitleAuth>
        <Input
          label="E-mail"
          control={control}
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="done"
          error={errors.email}
          blurOnSubmit={false}
        />
        <Button
          onPress={handleSubmit(handleSubmitLogin)}
          label="Recuperar senha"
          loading={loading}
          fullWidth
          color="secondaryDark"
          variantType="block"
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </TouchableOpacity>
      </Column> */}
    </S.ForgotPasswordContainer>
  );
};

export default ForgotPassword;
