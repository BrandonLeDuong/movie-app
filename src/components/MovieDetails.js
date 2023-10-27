import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";

function MovieDetails({ title, overview, poster_path }) {
  let { id } = useParams();

  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Make an API call to fetch the specific movie based on id
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f3cb2a38226d1f99185c735620c29eff`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  if (!movie) {
    return <div>Loading...</div>; // Add a loading state while waiting for the API response
  }

  let runtime_minutes = movie.runtime;
  const hours = Math.floor(runtime_minutes / 60);
  const minutes = runtime_minutes % 60;

  return (
    <div
      className="detail-container"
      style={{ backgroundColor: "rgb(27, 27, 27)" }}
    >
      <Navigation />
      <div className="movie-details">
        <img src={API_IMG + movie.poster_path} alt={title} />
        <div className="side">
          <h1>{movie.title} </h1>
          <div className="release-details">
            <span>{movie.release_date } </span>
            <span> {`${hours}h ${minutes}m `}</span>
            <span className="movie-average">
              {Math.round(movie.vote_average * 10) / 10}
            </span>
          </div>
          <p className="genre">{movie.genres[0].name} </p>
          <h2>
            <span className="green-tagline">{movie.tagline} </span>
          </h2>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

//AJAX , PROMISES ASYNC
