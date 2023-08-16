import { useCartContext } from './CartContextProvider';
import useCartProducts from './useCartProducts';
import useCartTotal from './useCartTotal';

const useCart = () => {
  const { isOpen, setIsOpen } = useCartContext();
  const {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartProducts();
  const { total, updateCartTotal } = useCartTotal();

  
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  // const reset = () => {
  //   total.productQuantity=0,
  //   total.totalPrice=0}

  return {
    isOpen,
    openCart,
    closeCart,
    // reset,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
    updateCartTotal,
  };
};

export default useCart;
