import React from 'react';

const ProductView = ({ product }) => {
  //const IMAGE_EXT = '.jpg';
  return (
    // <div className="card" style={{ width: '18rem' }}>
    // <div className="card col-4">
    //   <img src={product.image_url} className="card-img-top" alt="No preview" />
    //   <div className="card-body">
    //     <h5 className="card-title">{`Type : ${product.type}  Name:  ${product.name}`}</h5>
    //     <h6 className="card-subtitle mb-2 text-muted">
    //       Price : {product.price}
    //     </h6>
    //     <p className="card-text">{product.description}</p>
    //   </div>
    // </div>
    // <div>
    //   <h1>{product.name}</h1>
    //   <h2>{product.type}</h2>
    //   <h3>{product.price}</h3>
    //   <h4>{product.description}</h4>
    //   <h4>{product.image_url}</h4>
    // </div>

    <div className="col s4">
      <div className="card" style={{ color: 'blue' }}>
        <div className="card-image">
          <img
            src={product.image_url}
            width="30px"
            height="30px"
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
