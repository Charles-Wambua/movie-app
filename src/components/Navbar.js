import React from "react";
// import { Link } from "react-router-dom";
import "./css/Navbar.css";
import SearchMovies from "../pages/SeachMovies";
import { useState } from "react";
// import Genres from "../pages/Genres";

function Navbar() {
  const [showGenres, setShowGenres] = useState(false)
  
  // const switchmodes = () => {
  //   setShowGenres(!showGenres)
  //   console.log(showGenres)
  // }
  return (
    <>
      <div className="navbar">
        <div style={{ color: "red", fontSize: 35, fontFamily:"cursive" }}>MOVIES</div>
        <div className="links">
          <a href="" className="nav-link">Home</a>
          <a
            href="https://github.com/Charles-Wambua/movie-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          {/* <Link className="nav-link">Home</Link>
          <button className="nav-link" onClick={switchmodes}>Genres</button> */}
          {/* <Link className="nav-link" onClick={switchmodes}>
            Genres
          </Link> */}
        
        </div>
      </div>
       {/* <Genres showGenres={showGenres} /> */}
      <SearchMovies />
    </>
  );
}

export default Navbar;
