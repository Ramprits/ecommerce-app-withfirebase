import { ShopTypes } from "./shop-types";
import SHOP_DATA from "../../pages/shop/shop.data";

const INITIAL_STATE = {
  shops: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.GET_SHOP:
      return { ...state, shops: action.payload };

    default:
      return state;
  }
};

export default shopReducer;
