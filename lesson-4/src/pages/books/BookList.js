import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from './actions/index';
import ErrorComponent from './components/BookError';
import BookLoader from './components/BookLoader';
import BooksData from './components/BookList';

const BookList = ({fetchBooks, data, loading, error, hasError})=> {
  
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks]);
  
  return (
    <div>
      <h2>Book List</h2>
      <BookLoader loading={loading} />
      <BooksData data={data} />
      <ErrorComponent data={error} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { book } = state;
  const { loading, error, hasError, data } = book;
  return {
    data,
    loading,
    hasError,
    error
  }
}
const mapDispatchToProps =  {
  fetchBooks
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
