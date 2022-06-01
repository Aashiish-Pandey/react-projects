import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTours() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  function removeTour(id) {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  console.log(tours);
  if (!tours.length) {
    return <button onClick={() => fetchTours()}>Refresh</button>;
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
