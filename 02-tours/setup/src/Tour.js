import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <span>${price}</span>
      <p>
        {more ? info : `${info.substring(0, 100)}....`}

        <button onClick={() => setMore(!more)}>
          {more ? "ShowLess" : "ShowMore"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
};

export default Tour;
