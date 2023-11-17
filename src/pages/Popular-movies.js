import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Movies.css";
import { Link } from "react-router-dom";

const apiUrl = "http://www.omdbapi.com/?apikey=ba939b94";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}&s=popular&type=movie`)
      .then((response) => {
        setLoading(false);
        const randomMovies = displayrandomly(response.data.Search || []);
        setMovies(randomMovies);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured, please try again later");
        console.error("Error fetching movies:", error);
      });
  }, []);

  const displayrandomly = (randomMovie) => {
    for (let i = randomMovie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomMovie[i], randomMovie[j]] = [randomMovie[j], randomMovie[i]];
    }
    return randomMovie;
  };

  return (
    <div className="movies">
      <Link
        to="/"
       
      >
        Suggested movies
      </Link>
      <Link
        to="/movies"
       
      >
        Movies
      </Link>
      <Link
        to="/series"
        
      >
        series
      </Link>
      <hr />

      <p
        style={{
          fontFamily: "poppinslight",
          color: "black",
          textAlign: "left",
          textDecoration: "none",
          padding: 1,
          fontfamily: 'poppinsemilight'
        }}
      >
        For you
      </p>
      <hr />
      <div className="movie-container">
        {loading ? (
          <div className="spinner-cont">
            <div className="spinner"></div>
          </div>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                className="movie-poster"
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
              />
              <div className="movie-details">
                <div className="movie-title">{movie.Title}</div>
                <div className="movie-year">{movie.Year}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
