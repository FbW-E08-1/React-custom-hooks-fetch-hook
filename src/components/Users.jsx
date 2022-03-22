import React from 'react';
import useFetch from '../hooks/useFetch';

const Users = () => {
  const url = 'https://fakerapi.it/api/v1/users';

  //Our custom hook returns API data to us
  const { results, loading, error } = useFetch(url);

  //If there is no data show loading text
  if (loading) return <p>Loading...</p>;

  //If there is an error show the error
  if (error) return <p>{error}</p>;

  //Otherwise show the users information
  const userList = results.data.map((user) => (
    <aside key={user.id}>
      <aside className='first'>
        <label>First Name</label>
        <p>{user.firstname}</p>
      </aside>
      <aside className='second'>
        <label>Last Name</label>
        <p>{user.lastname}</p>
      </aside>
    </aside>
  ));

  return <section className='content'>Users {userList}</section>;
};

export default Users;
