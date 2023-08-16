import { KeyboardEvent } from 'react';

// import formatPrice from '../../../utils/formatPrice';
import { IProduct } from '../../../models';

import { useCart } from '../../../contexts/cart-context';

import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    thumbnail,
    title,
    price,
    images,
    description,
    rating,
    brand,
    // installments,
    // currencyId,
    // currencyFormat,
    // isFreeShipping,
  } = product;

  const formattedPrice = price;
  let productInstallment;

  // if (installments) {
    // const installmentPrice = price / installments;

    // productInstallment = (
    //   <S.Installment>
    //     <span>or {installments} x</span>
    //     <b>
    //       {currencyFormat}
    //       {formatPrice(installmentPrice, currencyId)}
    //     </b>
  //     </S.Installment>
  //   );
  // }

  console.log("path"+thumbnail);
  
  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  console.log("images:"+images[0]);
  
  return (
    <S.Container
      onKeyUp={handleAddProductWhenEnter}
      thumbnail={thumbnail}
      images1={images}
      tabIndex={1}
    >
      {/* {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>} */}
      <S.Image alt={title} />
      <S.Title>{title}</S.Title>
      {/* <small>{description}</small> */}
      <S.Price>
        <S.Val>
          <small style={{ color: "dark-green" }}>Price:</small>
          <b>{formattedPrice} $</b>
        </S.Val>
        {productInstallment}
        <small style={{ color: "red" }}>rating:{rating} </small>
        <small style={{ color: "red" }}> brand:{brand}</small>
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
