import React, { useState, useEffect } from "react";
import axiosJsonp from "axios-jsonp";
import axios from "axios";
import { Alert, Card } from "react-bootstrap";
import "./css/SearchMovies.css";
import Navbar from "../components/Navbar";
import App from "../App";

const apiUrl = "https://www.omdbapi.com/?apikey=ba939b94";

const SearchMovies = ({ searchGenre, clearSearchGenre }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log("genre serched:", searchGenre);

  const handleSearch = async () => {
    setLoading(true);
    axiosJsonp({
      url: apiUrl,
      callbackFunction: "callback",
      params: {
        s: searchGenre || searchTerm
        
      },
    })
      .then((response) => {
        setLoading(false);
        setSearchResults(response.data.Search || []);
        setSearchTerm("");
      })
      .catch((error) => {
        setLoading(false);
        alert("No movies found at the time, please try again later");
        console.error("Error occurred:", error);
      });
  };
  useEffect(() => {
    console.log("Updated search term:", searchGenre);
  }, [searchGenre]);

 
  return (
    <>
      <div className="inn">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm || searchGenre }
          onChange={(event) => setSearchTerm(event.target.value )}
          className="input-tab"
        />

        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearchGenre} style={{marginLeft:"10px"}}>Clear</button>
      </div>
      <div className="searchinput">
        {loading ? (
          <div className="spinner-cont">
            <div class="spinner"></div>
          </div>
        ) : searchResults.length === 0 ? (
          <p style={{ fontFamily: "poppinsmedium", color: "#fff" }}>
            No movies searched yet. Enter a movie name to search
          </p>
        ) : (
          <div>
            <div>
              <p
                style={{
                  fontFamily: "poppinsmedium",
                  color: "#fff",
                  textAlign: "left",
                }}
              >
                Movies we found under this search:
              </p>
              <hr />
            </div>
            <div className="found">
              {searchResults.map((movie) => (
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
              ))}
            </div>
          </div>
        )}
      </div>
    
    </>
  );
};

export default SearchMovies;
