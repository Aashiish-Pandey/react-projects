import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour =(id)=> {

    setTours((tours)=> {

      return tours.filter((tour)=>tour.id != id)
    })
  }

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };

  useEffect(() => fetchUsers(), []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length===0) {

    return (
      <button className ="btn" onClick ={()=>setTours(tours)} >refresh</button>
    )
  }

  return (

    <Tours tours ={tours} removeTour ={removeTour}/>
  )
}

export default App;
