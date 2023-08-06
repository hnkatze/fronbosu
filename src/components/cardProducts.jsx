import { UilShoppingCart } from '@iconscout/react-unicons';
import { useState } from 'react';
import '../style/productCard.css'
export function CardProduct({ data, addToCart }){
  const { nombre, precio, link, marca } = data;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(data, quantity); // Envía el producto y la cantidad al carrito
    setQuantity(1); // Resetea la cantidad a 1 después de agregar al carrito
  };

  return (
    <div  key={data.id} className="product-card">
      <img src={link} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{nombre}</h3>
        <p className="product-price">L.{precio}</p>
        <p className="product-description">{marca}</p>
        <div className="quantity-container">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            <UilShoppingCart size="20" />
          </button>
        </div>
      </div>
    </div>
  );
}

