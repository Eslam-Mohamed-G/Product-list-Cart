import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductsList';

const App = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('./data.json', {
    
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then((data) => {
        const dataHolder = data.map((item, index) => {
          return { ...item, id: index, quantity: 0 }
        })
        setProducts(dataHolder)

      })
      .catch(err => {
        console.error('Error fetching data: ' + err);
      })
  }, []);

  const incrementQuantity = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: element.quantity + 1 }
        : { ...element }
      ))
    }
  }

  const decrementQuantity = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: element.quantity - 1 }
        : { ...element }
      ))
    }
  }

  const removeItems = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: 0 }
        : { ...element }
      ))
    }
  }

  return (
    <div className="App">
      {<div className='flex flex-col md:flex-row py-5 px-4 md:p-8 bg-rose-50 h-full'>
        <ProductList 
          products={products} 
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity} 
        />

        <Cart 
          products={products} 
          removeItems={removeItems} 
        />
      </div>}
    </div>
  );
}

export default App;
