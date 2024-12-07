import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import "../index.css";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(ContextGlobal);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error('Error fetching dentists: ', error));
  }, []);

  return (
    <main className={`container-col ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card 
            id={dentist.id}
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
          />
        ))}
      </div>
    </main>
  )
}

export default Home;