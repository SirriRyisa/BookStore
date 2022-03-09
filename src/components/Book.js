import React from 'react';

const Book = () => (
  <div>
    <form className="addbooks">
      <h1>ADD NEW BOOKS</h1>
      <input className="books-input" type="text" placeholder="Books Title" />
      <button type="button">Add Books</button>
    </form>
  </div>
);

export default Book;
