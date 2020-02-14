import React from 'react';
const BookShow = props => {
  return <div>I am in BookShow {props.match.params.id}</div>;
};
export default BookShow;
