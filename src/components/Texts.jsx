import React from 'react';
import useFetch from '../hooks/useFetch';

const Texts = () => {
  const url = 'https://fakerapi.it/api/v1/texts';

  //Our custom hook returns API data to us
  const { results, loading, error } = useFetch(url);

  //If there is no data show loading text
  if (loading) return <p>Loading...</p>;

  //If there is an error show the error
  if (error) return <p>{error}</p>;

  //Otherwise show the text information
  const textList = results.data.map((text, i) => (
    <aside key={i}>
      <aside className='first'>
        <label>Title</label>
        <p>{text.title}</p>
      </aside>
      <aside className='second'>
        <label>Author</label>
        <p>{text.author}</p>
      </aside>
    </aside>
  ));

  return <section className='content'>Texts {textList}</section>;
};

export default Texts;
