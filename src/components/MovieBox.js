import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  popularity,
}) => {
  return (
    <div className="card-container">
      <img src={API_IMG + poster_path} alt={title}></img>
      <h1>{title}</h1>
      <p>{overview}</p>
      <span>{release_date}</span>
    </div>
  );
};

export default MovieBox;
