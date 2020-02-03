import { CartType } from "./cart-types";
import { addCartItems, removeItem } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartType.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload)
      };

    case CartType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
      
    case CartType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        ]
      };
    default:
      return state;
  }
};

export default cartReducer;
