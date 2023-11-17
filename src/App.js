import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import axiosJsonp from "axios-jsonp";
import Movies from "./pages/Movies";
// import Genres from "./components/Genres";
import SearchMovies from "./pages/SearchMovies";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Series from "./pages/Series";
import Home from "./pages/Home";
import PopularMovies from "./pages/Popular-movies";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://www.omdbapi.com/?apikey=ba939b94";

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
        alert("No movies found at the time, please try again later");
        console.error("Error occurred:", error);
      });
  };
  return (
    <div className="App">
      
      <Router>
        <Navbar handleSearch={handleSearch} searchResults={searchResults} />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={ <PopularMovies/>} />
          <Route path="/movies" element={ <Movies/>} />
          <Route path="/series" element={ <Series/>} />
        </Routes>
        <Footer />
      </Router>
.    </div>
  );
}

export default App;
