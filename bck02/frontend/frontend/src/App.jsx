import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/jokes')
    .then(res=>setJokes(res.data))
    .catch(err=>console.error(err))
  },[])

  return (
    <>
      <h1>Random Jokes</h1>
      {jokes.length > 0 ? (
        jokes.map((joke) => (
          <div key={joke.id} style={{ marginBottom: '1rem' }}>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading jokes...</p>
      )}
    </>
  );
}

export default App;
