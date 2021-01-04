import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * Component for displaying a Book's details.
 *
 * @component
 * @example
 * return (
 *   <Book />
 * )
 */
function Book(props) {

  let { id } = useParams();

  return (
    <>
      <h1>Book ID: {id}</h1>
      <p>This is where individual book details can be displayed</p>
    </>
  );
}

export default Book;