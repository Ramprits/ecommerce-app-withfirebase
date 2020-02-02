import { CartType } from "./cart-types";
export const toggleCartHidden = () => ({
  type: CartType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: CartType.ADD_CART_ITEM,
  payload: item
});
