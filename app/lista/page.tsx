import React from 'react';
import Header from '../header';

const products = [
  { id: 1, title: 'Producto 1', image: '/product1.jpg' },
  { id: 2, title: 'Producto 2', image: '/product2.jpg' },
  { id: 3, title: 'Producto 3 ', image: '/product3.jpg' },
  // Puedes agregar más productos aquí
];

const IndexPage = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;


