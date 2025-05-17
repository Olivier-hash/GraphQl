import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
