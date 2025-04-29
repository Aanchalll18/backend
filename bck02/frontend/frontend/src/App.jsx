import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('/api/jokes') 
      .then(res => res.json())
      .then(data => setJokes(data))
      .catch(err => console.error('Error fetching jokes:', err));
  }, []);

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
