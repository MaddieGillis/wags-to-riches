import React from "react";
import { GET_PETS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Favedogs = () => {
  const { loading, error, data } = useQuery(GET_PETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Saved/Favorites Dogs Here</h1>

      <ul>{data && data?.pets?.map((pet) => <li>name {pet.name}</li>)}</ul>
    </div>
  );
};

export default Favedogs;
