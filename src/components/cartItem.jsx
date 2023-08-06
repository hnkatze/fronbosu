

const CartItem = ({ nombre, precio, cantidad }) => {
  return (
    <div className="cart-item">
      <p className="item-name">{nombre}</p>
      <p className="item-price">L.{precio}</p>
      <div className="item-quantity">
        <span>Cantidad:</span>
        <input type="number" min="1" value={cantidad} readOnly />
      </div>
    </div>
  );
};

export default CartItem;
