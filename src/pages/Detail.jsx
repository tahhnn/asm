import React from "react";
import { useParams } from "react-router-dom";

function Detail({ product }) {
  const { id } = useParams();
  const findPrd = product.find((p) => p.id === +id);
  return (
    <div>
      <h1>{findPrd.name}</h1>
      <h1>{findPrd.price}</h1>
    </div>
  );
}

export default Detail;
