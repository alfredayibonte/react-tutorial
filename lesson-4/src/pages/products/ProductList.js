import React from 'react';
import { useEffect } from 'react';
import { fetchProducts } from './actions/index';
import { connect } from 'react-redux';
import ProductLoader from './components/ProductLoader';
import ProductList from './components/ProductList';
import ProductError from './components/ProductError';

const ProductsList = ({ loading, data, hasError, error, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      {/* <h1>Product List</h1> */}
      <ProductLoader loading={loading} />
      <ProductList data={data} />
      <ProductError data={error} />
    </div>
  );
};
const mapStateToProps = state => {
  const { products } = state;
  const { loading, data, hasError, error } = products;

  return {
    loading,
    data,
    hasError,
    error
  };
};

const mapDispatchToProps = {
  fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
