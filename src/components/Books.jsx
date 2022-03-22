import React from 'react';
import useFetch from '../hooks/useFetch';

const Books = () => {
  const url = 'https://fakerapi.it/api/v1/books';

  const { results, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const bookList = results.data.map((book) => (
    <aside key={book.isbn}>
      <aside className='first'>
        <label>Title</label>
        <p>{book.title}</p>
      </aside>
      <aside className='second'>
        <label>Author</label>
        <p>{book.author}</p>
      </aside>
    </aside>
  ));

  return <section className='content'>Books {bookList}</section>;
};

export default Books;
