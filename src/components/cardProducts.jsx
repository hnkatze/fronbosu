import '../style/productCard.css';
import { UilShoppingCart } from '@iconscout/react-unicons';

export function CardProduct({ key, data, setCartCount }) {
  const { nombre, precio, link, marca } = data;

  return (
    <div key={key} className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="mx-2">
        <div className="product-card">
          <img src={link} alt={nombre} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">L.{precio}</h3>
            <p className="product-price">{nombre}</p>
            <p className="product-description">{marca}</p>
            <button
              className="add-to-cart-button"
              onClick={() => setCartCount(prevCount => prevCount + 1)}
            >
              <UilShoppingCart size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

