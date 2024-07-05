import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/150",
      rating: 9,
    },
    {
      title: "Interstellar",
      description: "A space exploration saga",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.5,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: "" });

  const handleFilter = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === "" || movie.rating >= filter.rating)
  );

  const addMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "New movie description",
      posterURL: "https://via.placeholder.com/150",
      rating: 7,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <button onClick={addMovie}>Add Movie</button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
