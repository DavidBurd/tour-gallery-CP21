import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import Gallery from './components/Gallery';

const App = () => {
  // State to store tours data
  const [tours, setTours] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error state

    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw error if response is not OK
      }
      const data = await response.json(); // Parse JSON response
      setTours(data); // Update tours state with fetched data
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour from the list
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Conditional rendering for loading, error, or main content
  if (loading) {
    return <h2>Loading...</h2>; // Show loading message
  }

  if (error) {
    return <h2>Error: {error}</h2>; // Show error message
  }

  return (
    <main>
      <h1>Our Tours</h1>
      {tours.length > 0 ? (
        // Render Gallery component if there are tours
        <Gallery tours={tours} onRemove={removeTour} />
      ) : (
        // Show "No tours left" message and a refresh button if no tours
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