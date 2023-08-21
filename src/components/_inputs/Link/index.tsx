import React from 'react';
import * as S from './styles';

export interface LinkProps {
  label: string;
  icon: any;
  handleOnPress?: () => void;
}

const Link: React.FunctionComponent<LinkProps> = ({
  label,
  icon,
  handleOnPress,
}) => {
  return (
    <S.Link onPress={handleOnPress}>
      {!!icon && (
        <S.LinkStyles.IconContainer>
          <S.LinkStyles.Icon source={icon} />
        </S.LinkStyles.IconContainer>
      )}
      <S.LinkStyles.Label>{label}</S.LinkStyles.Label>
    </S.Link>
  );
};

export default Link;
