import React from 'react';

const ProductView = ({ product }) => {
  return (
    <div className="col s4">
      <div className="card" style={{ color: 'blue' }}>
        <div className="card-image">
          <img
            src={product.image_url}
            width="50px"
            height="250px"
            alt={product.name}
          />

          <span className="card-title">{product.name}</span>
        </div>

        <div className="card-content">
          <p>{product.type}</p>
          <p>{product.description}</p>
          <p>
            <b>Price: {product.price}$</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
