import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;

function AddUserForm() {
  const [name, setName] = useState('');
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add User</button>
      {loading && <p>Adding user...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Added: {data.addUser.name}</p>}
    </form>
  );
}

export default AddUserForm;
