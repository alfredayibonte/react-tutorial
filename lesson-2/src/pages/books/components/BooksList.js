import React from 'react';
const BooksData = ({ booklist }) => {
  console.log(booklist);
  //return <h1>Testing</h1>;

  const books = booklist.map(book => (
    <div key={book.id}>
      <h1>{book.name}</h1>
      <h2>{book.author}</h2>
      <h3>{book.price}</h3>
      <h4>{book.description}</h4>
    </div>
  ));

  return books;
};

export default BooksData;
