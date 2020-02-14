import React from 'react';
const BooksError = ({ error }) => {
  return error && <div>{error.toString()}</div>;
};

export default BooksError;
