import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <main>
      <h1>Our Tours</h1>
      {tours.length > 0 ? (
        <Gallery tours={tours} onRemove={removeTour} />
      ) : (
        <div>
          <h2>No tours left</h2>
          <button className="btn-refresh" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
};

export default App;