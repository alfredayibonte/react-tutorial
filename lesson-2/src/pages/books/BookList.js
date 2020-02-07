import React, { useState, useEffect } from 'react';
import { bookList } from './actions/index';
import Loadingbooks from './components/Loadingbooks';
import BooksError from './components/BooksError';
import BooksData from './components/BooksList';

const BookList = props => {
  //console.log('booklist', props);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setBooks(await bookList());
      //  bookList().then(books => setBooks(books));
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>

      {<Loadingbooks loading={loading} />}
      {<BooksData booklist={books} />}
      {<BooksError error={error} />}
    </div>
  );
};
export default BookList;
