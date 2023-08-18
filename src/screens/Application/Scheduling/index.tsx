import React, { useState } from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Button, Input, InputSelect } from 'components';

import { Props } from 'interfaces/routes.interface';

const Scheduling = ({ route, navigation }: Props) => {
  const defaultSelectValue = { label: '', value: '' };

  const [userValue, setUserValue] = useState('');
  const [serviceValue, setServiceValue] = useState(defaultSelectValue);
  const [professionalValue, setProfessionalValue] =
    useState(defaultSelectValue);
  const [dateValue, setDateValue] = useState(defaultSelectValue);
  const [timeValue, setTimeValue] = useState(defaultSelectValue);

  const handleChangeUser = (value: any) => setUserValue(value);
  const handleChangeService = (value: any) => setServiceValue(value);
  const handleChangeProfessional = (value: any) => setProfessionalValue(value);
  const handleChangeDate = (value: any) => setDateValue(value);
  const handleChangeTime = (value: any) => setTimeValue(value);

  return (
    <S.SchedulingContainer>
      <BackHeader title="Agendamento" />

      <S.SchedulingContent>
        <Input
          label="Nome:"
          type="text"
          value={userValue}
          handleOnChange={handleChangeUser}
        />
        <S.SchedulingSelects>
          <InputSelect
            label="Tipo de serviço:"
            items={[]}
            value={serviceValue}
            handleOnChange={handleChangeService}
          />
          <InputSelect
            label="Profissional:"
            items={[]}
            value={professionalValue}
            handleOnChange={handleChangeProfessional}
          />
          <InputSelect
            label="Data:"
            items={[]}
            value={dateValue}
            handleOnChange={handleChangeDate}
          />
          <InputSelect
            label="Horário:"
            items={[]}
            value={timeValue}
            handleOnChange={handleChangeTime}
          />
        </S.SchedulingSelects>

        <S.SchedulingSubmitWrapper>
          <Button label="Agendar" handleOnPress={() => {}} />
        </S.SchedulingSubmitWrapper>
      </S.SchedulingContent>
    </S.SchedulingContainer>
  );
};

export default Scheduling;
