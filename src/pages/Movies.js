import React from "react";
import "./css/Movies.css";
import Footer from "./Footer";

const Movies = () => {
  return (
    // <>
    <div className="movies">
      <div className="image">
        <img src="/thrones.jpg" alt="" />
        <div className="overlays">
          <h3>GET ALL YOUR MOVIES IN ONE PLACE</h3>
          <div className="movie-classes">
            <div className="movie">
              <img src="/action.jpeg" alt="" />
              <h3>Action Movies</h3>
              Get all action movies you would like
            </div>
            <div className="movie">
              <img src="/comedy.jpg" alt="" />
              <h3>Comedy Movies</h3>
              Get all your comedy movies in one place
            </div>

            <div className="movie">
              <img src="/romance.jpg" alt="" />
              <h3>Romantic movies</h3>
              Get all romance movies here
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Footer/>
    // </>
  );
};

export default Movies;
