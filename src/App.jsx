import { useEffect, useState } from 'react'
import { Nav } from './components/navbar'
import { CardProduct } from './components/cardProducts'
import { getDocs, collection } from 'firebase/firestore'
import{ db } from "./firebase/firebaseconfig"


function App() {

  const  [productList, setProductList] = useState([]);
  const productColletionRef = collection(db,"products");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const  getProductList = async () =>{

  try{
    const data = await getDocs(productColletionRef);
    const filterData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}));
    setProductList(filterData);
  }catch(err){
    console.error(err);
  }
    };
    getProductList();
  }, []);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].cantidad += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, cantidad: quantity }]);
    }

    setCartCount((prevCount) => prevCount + quantity); 
  };

  return (
    <>
      <Nav cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems} setCartCount={setCartCount}  />

      <br />
          <div className="product-list-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
        {productList.map((product) => (
          <CardProduct key={product.id} data={product} addToCart={addToCart}/>
        ))}
      </div>
    </>
  );
}

export default App
