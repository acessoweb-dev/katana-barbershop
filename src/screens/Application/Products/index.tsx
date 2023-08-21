import React from 'react';
import * as S from './styles';

import BackHeader from 'screens/_headers/Back';
import { Image, Text } from 'react-native';

import { Props } from 'interfaces/routes.interface';

const mockProducts = [
  {
    productId: 'product-01',
    productTitle: 'Barba econômico',
    productPrice: 'R4 49,90',
    productLink: '',
    productBanner: '',
  },
  {
    productId: 'product-02',
    productTitle: 'Barba econômico',
    productPrice: 'R4 49,90',
    productLink: '',
    productBanner: '',
  },
  {
    productId: 'product-04',
    productTitle: 'Barba econômico',
    productPrice: 'R4 49,90',
    productLink: '',
    productBanner: '',
  },
  {
    productId: 'product-042',
    productTitle: 'Barba econômico',
    productPrice: 'R4 49,90',
    productLink: '',
    productBanner: '',
  },
  {
    productId: 'product-054',
    productTitle: 'Barba econômico',
    productPrice: 'R4 49,90',
    productLink: '',
    productBanner: '',
  },
];

const Products = ({ route, navigation }: Props) => {
  return (
    <S.ProductsContainer>
      <BackHeader title="Produtos" />
      <S.ProductsContent>
        <S.ProductsListing>
          {mockProducts.map(product => (
            <ProductCard
              key={product.productId}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              productLink={product.productLink}
              productBanner={product.productBanner}
            />
          ))}
        </S.ProductsListing>
      </S.ProductsContent>
    </S.ProductsContainer>
  );
};

export default Products;

// =================================================== PRODUCT CARD

interface IProductCard {
  productTitle: string;
  productPrice: string;
  productLink: string;
  productBanner: any;
}

const ProductCard = ({
  productTitle,
  productPrice,
  productLink,
  productBanner,
}: IProductCard) => {
  return (
    <S.ProductCard>
      <S.ProductCardStyles.Banner>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          source={productBanner}
        />
      </S.ProductCardStyles.Banner>
      <S.ProductCardStyles.Content>
        <S.ProductCardStyles.Title>{productTitle}</S.ProductCardStyles.Title>
        <S.ProductCardStyles.Price>{productPrice}</S.ProductCardStyles.Price>
      </S.ProductCardStyles.Content>
    </S.ProductCard>
  );
};
