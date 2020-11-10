import React from 'react';
const ProductError = ({ data }) => {
  return data && <div>{data.toString()}</div>;
};

export default ProductError;
