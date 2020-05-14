import React from 'react';
// Apollo
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MESSAGE = gql`
  query{
    messages{
      _id
      title
      content 
      author 
    }
  }
`;

export default function MessageList(){

  const { loading, error, data } = useQuery(GET_MESSAGE);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      {data.messages.map(item => (
        <p>{item.title}</p>
      ))}
    </section>
  );
};