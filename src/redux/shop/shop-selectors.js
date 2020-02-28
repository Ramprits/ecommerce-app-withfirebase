import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const shops = createSelector([selectShop], s => s.shops);

export const selectShopItems = createSelector(
  [selectShop],
  shopItem => shopItem.items
);

export const shopCollectionPreview = createSelector([shops], collections =>
  Object.keys(collections).map(key => collections[key])
);

export const shopCollectionById = url => createSelector([shops], s => s[url]);
