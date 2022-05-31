import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <img src={image} />
          </div>
        );
      })}
    </div>
  );
};
export default List;
