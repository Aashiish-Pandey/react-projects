import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  console.log("Heappy man");

  const [people, setPeople] = useState(data);
  return (
    <div>
      <h3>{people.length} birthday today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear All</button>
    </div>
  );
}

export default App;
