import { CartType } from "./cart-types";
export const toggleCartHidden = () => ({
  type: CartType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: CartType.ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: CartType.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartType.REMOVE_ITEM,
  payload: item
});
