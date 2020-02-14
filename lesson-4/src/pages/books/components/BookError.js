import React from 'react';
const BookError = ({ data }) => {
  return data && <div>{data.toString()}</div>;
};
export default BookError;
