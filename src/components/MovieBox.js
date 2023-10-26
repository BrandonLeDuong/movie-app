import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, release_date, overview }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };


  return (
    <div className="card-container">
      <img src={API_IMG + poster_path} alt={title}></img>
      {/* <h1>{title}</h1> */}

      {showDetails ? <p>{overview}</p> : null}
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      <div>{release_date}</div>
    </div>
  );
};

export default MovieBox;
