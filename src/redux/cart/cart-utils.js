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

export const removeItem = (cartItems, removeCartItem) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === removeCartItem.id
  );
  if (existingCart.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== removeCartItem.id);
  }
  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === removeCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
