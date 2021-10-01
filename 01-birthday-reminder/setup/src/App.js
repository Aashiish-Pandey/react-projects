import React, { useState } from "react";
import data from "./data";
import List from "./List";
import PeopleList from "./PeopleList";
function App() {
  console.log(data);

  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthday today</h2>
        {people.map((person) => (
          <PeopleList person={person} />
        ))}
        <button className="btn" onClick={() => setPeople([])}>
          clear All
        </button>
      </section>
    </main>
  );
}

export default App;
