import React from "react";

const PeopleList = ({ person }) => {
  const { id, name, image, age } = person;

  return (
    <article key={id} className="person">
      <img src={image} name={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default PeopleList;
