import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const { id } = tours;
  return (
    <div>
      <h1>Our Tours</h1>
      {tours.map((tour) => {
        return <Tour key={id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
