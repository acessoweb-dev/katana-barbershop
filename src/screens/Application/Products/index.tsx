import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const Products = ({ route, navigation }: Props) => {
  return (
    <S.ProductsContainer>
      <BackHeader title="Produtos" />
      <S.ProductsContent>
        <Text>Products</Text>
      </S.ProductsContent>
    </S.ProductsContainer>
  );
};

export default Products;
