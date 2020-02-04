import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  Hats: 1,
  Sneakers: 2,
  Jackets: 3,
  Womens: 4,
  Mens: 5
};
const selectShop = state => state.shop;

export const selectShops = createSelector([selectShop], s => s.shops);

export const selectShopItems = createSelector(
  [selectShop],
  shopItem => shopItem.items
);

export const selectCollections = collectionUrl =>
  createSelector([selectShop], s =>
    s.shops.find(c => c.id === COLLECTION_ID_MAP[collectionUrl])
  );
