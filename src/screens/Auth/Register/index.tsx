import React, { useState } from 'react';
import * as S from './styles';

import { Button, Input } from 'components';

import { Props } from 'interfaces/routes.interface';

// import { registerClientSchema, registerSchema } from 'validators/auth.schemas';
// import { UserRegister } from 'interfaces/auth.interface';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import api from 'services/api';
// import useToast from 'libs/useToast';
// import Input from 'components/Inputs/Input';
// import Button from 'components/Button';
// import axios from 'axios';
// import { ResponseError } from 'interfaces/utils.interface';
// import { useUserStore } from 'store/user';
// import { useAuthStore } from 'store/auth';
// import { ButtonText } from '../Login/styles';
// import { Platform, TouchableOpacity } from 'react-native';
// import InputSelect from 'components/Inputs/InputSelect';
// import InputImage from 'components/Inputs/InputImage';

const Register = ({ route, navigation }: Props) => {
  const [nameValue, setNameValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleChangeName = (value: any) => setNameValue(value);
  const handleChangeDate = (value: any) => setDateValue(value);
  const handleChangePhone = (value: any) => setPhoneValue(value);
  const handleChangeEmail = (value: any) => setEmailValue(value);
  const handleChangePassword = (value: any) => setPasswordValue(value);

  const handleSubmitLogin = () => {};
  // const [loading, setLoading] = React.useState<boolean>(false);

  // const [estados, setEstados] = React.useState<any>([]);
  // const [cidade, setCidade] = React.useState<any>([]);
  // const [userType, setUserType] = React.useState('Profissional');
  // const [categorias, setCategorias] = React.useState<any>([]);

  // const toast = useToast();

  // const handleGetState = async () => {
  //   try {
  //     const { data: response } = await api.get('/lista_estados.php', {
  //       params: {
  //         perPage: 50,
  //       },
  //     });

  //     setEstados(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //   }
  // };

  // const handleGetCitys = async (stateId: string) => {
  //   try {
  //     const { data: response } = await api.get('/lista_cidades.php', {
  //       params: {
  //         estado_id: stateId,
  //         perPage: 10000,
  //       },
  //     });

  //     setCidade(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //   }
  // };

  // const handleSubmitRegister = async (formData: any) => {
  //   try {
  //     setLoading(true);

  //     var form_data: any = new FormData();

  //     form_data.append('type', userType);

  //     for (var key in formData) {
  //       form_data.append(key, formData[key]);
  //     }

  //     formData.image?.map((img: string, index: number) => {
  //       if (img !== '') {
  //         form_data.append(`photo-${index}`, {
  //           uri: Platform.OS === 'android' ? img : img.replace('file://', ''),
  //           type: 'image/jpeg',
  //           name: `image-${index}`,
  //         });
  //       }
  //     });

  //     const { data: response } = await api.post('/cadastro.php', form_data, {
  //       headers: {
  //         'content-type': 'multipart/form-data',
  //       },
  //     });

  //     console.log(response);
  //     if (response.error) {
  //       toast.errorToast(response.error);
  //       return;
  //     }

  //     useUserStore.getState().setUser({ ...response.data, type: userType });
  //     useAuthStore.getState().setToken('token');

  //     toast.successToast('Registro realizado com sucesso !');
  //   } catch (error) {
  //     console.log(error);
  //     const typedError = error as ResponseError;
  //     console.log(typedError?.response?.data?.message);
  //     if (axios.isAxiosError(error)) {
  //       toast.errorToast(typedError?.response?.data?.message);
  //     } else {
  //       toast.errorToast('Erro ao efetuar o registro');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const {
  //   control,
  //   handleSubmit,
  //   setFocus,
  //   watch,
  //   formState: { errors },
  // } = useForm<UserRegister>({
  //   defaultValues: {
  //     nome: '',
  //     email: '',
  //     senha: '',
  //     whatsapp: '',
  //     estado: '',
  //     cidade: '',
  //     anos_experiencia: '',
  //     descricao: '',
  //     valor: '',
  //     images: [],
  //   },
  //   resolver: yupResolver(
  //     userType === 'Profissional' ? registerSchema : registerClientSchema
  //   ),
  // });

  // const estado = watch('estado');

  // const handleGetCategories = async () => {
  //   try {
  //     setLoading(true);

  //     const query: any = {
  //       page: 1,
  //       perPage: 500,
  //     };

  //     query.usuario_id = 7;

  //     const { data: response } = await api.get('/lista_servicos.php', {
  //       params: query,
  //     });

  //     setCategorias(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // React.useEffect(() => {
  //   if (estado) handleGetCitys(estado);
  // }, [estado]);

  // React.useEffect(() => {
  //   handleGetState();
  //   handleGetCategories();
  // }, []);

  return (
    <S.RegisterContainer
      extraScrollHeight={50}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <S.RegisterWrapper>
        <S.RegisterTitle>Cadastre-se</S.RegisterTitle>

        <S.RegisterInputsWrapper>
          <Input
            type="text"
            keyboardType="default"
            label="Nome completo:"
            value={nameValue}
            handleOnChange={handleChangeName}
          />
          <Input
            type="text"
            keyboardType="default"
            label="Data de nascimento:"
            value={dateValue}
            handleOnChange={handleChangeDate}
          />
          <Input
            type="text"
            keyboardType="number-pad"
            label="Celular:"
            value={phoneValue}
            handleOnChange={handleChangePhone}
          />
          <Input
            type="text"
            keyboardType="email-address"
            label="E-mail:"
            value={emailValue}
            handleOnChange={handleChangeEmail}
          />
          <Input
            type="password"
            keyboardType="default"
            label="Senha:"
            value={passwordValue}
            handleOnChange={handleChangePassword}
          />

          <S.RegisterSubmit>
            <Button
              inverted
              fullWidth
              label="Cadastrar"
              handleOnPress={handleSubmitLogin}
            />
          </S.RegisterSubmit>
        </S.RegisterInputsWrapper>
      </S.RegisterWrapper>
    </S.RegisterContainer>
  );
};

export default Register;
