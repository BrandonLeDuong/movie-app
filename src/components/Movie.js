import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=f3cb2a38226d1f99185c735620c29eff";
const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=f3cb2a38226d1f99185c735620c29eff";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = (searchKey) => {
    let url;
    if (searchKey) {
      url = `${API_SEARCH}&query=${searchKey}`;
    } else {
      url = API_URL;
    }

    fetch(url)
      .then((res) => res.json()) //use the response and convert the response into json format
      .then((json) => setMovieList(json.results)); //then we're going to log the json formatter response
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-container">
      <Navigation getMovie={getMovie} />

      <div className="grid">
        {movieList.map((movie) => (
          //inside the map function we're returning a react component called MovieBox with some props
          <MovieBox key={movie.id} {...movie} />
          //The sperad syntax is used to pass all the properties of the
          //movie object as props to the MovieBox component
        ))}
      </div>
    </div>
  );
}

export default Movie;
