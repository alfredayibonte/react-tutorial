import React from 'react';
import ProductView from './ProductView';
const ProductList = ({ data }) => {
  const products =
    data &&
    data.map(product => <ProductView key={product.id} product={product} />);

  return (
    <div className="container">
      <h3 className="center">Product List</h3>
      <div className="box">
        <div className="row">{products}</div>
      </div>
    </div>
  );
};

export default ProductList;
