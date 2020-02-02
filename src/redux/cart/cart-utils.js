export const addCartItems = (cartItems, cartToAddItem) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === cartToAddItem.id
  );
  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === cartToAddItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartToAddItem, quantity: 1 }];
};
