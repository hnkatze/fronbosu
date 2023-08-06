// Cart.js

import { useState } from 'react';
import CartItem from './cartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].cantidad += product.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <p>Total: L.{cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0)}</p>
    </div>
  );
};

export default Cart;
