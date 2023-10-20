import React, { useState } from "react";
import axiosJsonp from "axios-jsonp";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./css/SearchMovies.css";
// import Genres from "./Genres";

const apiUrl = "https://www.omdbapi.com/?apikey=ba939b94";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    axiosJsonp({
      url: apiUrl,
      callbackFunction: "callback",
      params: {
        s: searchTerm,
      },
    })
      .then((response) => {
        setLoading(false);
        setSearchResults(response.data.Search || []);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error occurred:", error);
      });
  };

  // const handleGenreClick = async (genre) => {
  //   await handleSearch();
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(apiUrl, {
  //       params: {
  //         s: genre,
  //       },
  //     });
  //     setSearchResults(response.data.Search || []);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data by genre:", error);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className="inn">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="input-tab"
        />
        {/* <Genres
          onGenreClick={(genre) => {
            console.log("clicked:", genre);
            handleGenreClick(genre);
          }}
          onSearch={(searchTerm) => {
            console.log("Searched:", searchTerm);
            setSearchTerm(searchTerm);
          }}
          showGenres={true}
        /> */}

        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="searchinput">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="foundmovies">
            {searchResults.map((movie) => (
              <Card key={movie.imdbID} className="moviecards">
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>
                    <a
                      href=""
                      style={{
                        textDecoration: "none",
                        fontSize: "18px",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    >
                      {movie.Title}
                    </a>
                  </Card.Title>
                  <Card.Text>Year: {movie.Year}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchMovies;
