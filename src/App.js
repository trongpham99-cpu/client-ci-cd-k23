import React, { useEffect } from 'react';

function App() {

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    getProducts();
    return () => {
    };
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://server-ci-cd.chatify.click/api/v1/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sản phẩm 1</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
