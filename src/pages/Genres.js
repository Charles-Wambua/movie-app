import React from "react";
import "./css/Genres.css";

function Genres({ onGenreClick, onSearch, showGenres }) {
  console.log("status", showGenres);
    
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

  const handleGenreClick = async (genre) => {
    await onGenreClick(genre);
    await onSearch(genre);
  };

  if (showGenres) {
    return (
      <div className="all-genres">
        <ul>
          {genres.map((genre) => (
            <li key={genre} onClick={() => handleGenreClick(genre)}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null; 
  }
}

export default Genres;
