import React from 'react';
import Header from '../header';



const products = [
  { id: 1, title: 'Audífonos Precio: 399 EUR', image: './imagenes/product1.jpg', width: 300, height: 200 },
  { id: 2, title: 'Iphone Precio 500 EUR', image: './imagenes/product2.jpg', width: 180, height: 200 },
  { id: 3, title: 'Tablet Precio 250 EUR', image: './imagenes/product3.jpg', width: 200, height: 200 },
  // Puedes agregar más productos aquí
];

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Lista de Productos</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} style={{ width: product.width, height: product.height }} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

