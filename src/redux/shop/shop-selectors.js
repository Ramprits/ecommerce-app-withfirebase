import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShops = createSelector([selectShop], s => s.shops);

export const selectShopItems = createSelector(
  [selectShop],
  shopItem => shopItem.items
);

export const selectShopCollectionPreview = createSelector(
  [selectShops],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollections = collectionUrl =>
  createSelector([selectShops], s => s[collectionUrl]);
