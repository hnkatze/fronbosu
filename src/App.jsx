import { useEffect, useState } from 'react'
import { Nav } from './components/navbar'
import { CardProduct } from './components/cardProducts'
import { getDocs, collection } from 'firebase/firestore'
import{ db } from "./firebase/firebaseconfig"


function App() {

  const  [productList, setProductList] = useState([]);
  const productColletionRef = collection(db,"products");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const  getProductList = async () =>{
  //leer la base de datos
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



  return (
    <>
    <Nav cartCount={cartCount} />

      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {productList.map((product) => (
    <CardProduct  key={product.id} data={product} setCartCount={setCartCount}/>
  ))} 

      </div>
      
      
    </>
  )
}

export default App
