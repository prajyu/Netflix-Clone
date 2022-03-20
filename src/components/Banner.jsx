import React, { useState, useEffect } from "react";
import "./Banner.css";

let baseUrl = "https://image.tmdb.org/t/p/original";

function Banner({ axios, requests }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(
        requests[
          Object.keys(requests)[
            Math.floor(Math.random() * Object.keys(requests).length)
          ]
        ]
      );
      let banner =
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ];

      setMovies(banner);
    };

    fetchData();
  }, [axios]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseUrl}${movies.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.title || movies?.original_name || movies?.name}
        </h1>
        <button className="banner_buttons">Play</button>
        <button className="banner_buttons">Info</button>
        <h1 className="banner_description">
          {truncate(movies?.overview, 300)}
        </h1>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

let truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
};

export default Banner;
