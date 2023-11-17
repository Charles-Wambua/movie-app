import React from "react";
import "./css/Navbar.css";
import SearchMovies from "../pages/SearchMovies";

import { useState } from "react";

function Navbar({ handleSearch, searchResults }) {
  const [showGenres, setShowGenres] = useState(false);
  const [searchGenre, setSearchGenre] = useState("");

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Adventure",
    "Animation",
    "Crime",
    "Romance",
    "Horror",
    "Science Fiction",
  ];

  const onGenreClick = async (genre) => {
    setSearchGenre(genre);
    console.log("Genre clicked:", genre);
    handleSearch(genre);
  };

  const handleGenreClick = async (genre) => {
    onGenreClick(genre);
  };

  const clearSearchGenre = () => {
    setSearchGenre("");
  
  };

  return (
    <>
      <div className="navbar">
        <div
          style={{
            color: "red",
            fontSize: 35,
            fontFamily: "cursive",
            fontFamily: "poppinsregular",
            textAlign: "baseline",
          }}
        >
          MOVIES
          <span
            style={{
              color: "gray",
              fontSize: 25,
              fontFamily: "cursive",
              fontFamily: "poppinsregular",
            }}
          >
            Place
          </span>
        </div>
        <div className="links">
          <a href="" className="nav-link">
            Home
          </a>

          <div
            className="genres"
            onMouseEnter={() => setShowGenres(true)}
            onMouseLeave={() => setShowGenres(false)}
          >
            Genres
            {showGenres && (
              <div className="genre-dropdown">
                <ul>
                  {genres.map((genre, index) => (
                    <li
                      key={genre}
                      onClick={() => handleGenreClick(genre)}
                      className="genre-item"
                    >
                      {genre}
                    </li>
                  ))}{" "}
                </ul>
              </div>
            )}
          </div>
         
          <a
            href="https://github.com/Charles-Wambua/movie-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" style={{ color: "white", marginRight: 10 }}></i>
          </a>
        </div>
      </div>

      <SearchMovies searchGenre={searchGenre} clearSearchGenre={clearSearchGenre} />
    </>
  );
}

export default Navbar;
