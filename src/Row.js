import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./config/axios";
import "./Row.css";
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setMTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movies) => {
    if (trailerUrl) {
      setMTrailerUrl("");
    } else {
      movieTrailer(movies?.name || ""||movies?.title || movies?.name || movies?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setMTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargerRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
