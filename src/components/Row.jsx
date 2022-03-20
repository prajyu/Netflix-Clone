import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./Row.css";

let baseUrl = "https://image.tmdb.org/t/p/original";

const options = {
  width: "100%",
  height: 390,
  playerVars: {
    autoplay: 1,
    controls: 0,
    rel: 0,
  },
};

function Row({ title, fetchUrl, axios, poster }) {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");
  const types = ["movie", "tv"];

  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(fetchUrl);
      setMovies(data.data.results);
      return data;
    };
    fetchData();
  }, []);

  let handleClick = (e) => {
    if (videoId === "" && videoId !== e?.id) setVideoId(e?.id);
    else setVideoId("");
  };

  useEffect(() => {
    let getVideoId = async () => {
      types.map(async (e) => {
        let imdb_video = `https://api.themoviedb.org/3/${e}/${videoId}/videos?api_key=78af33e749d0a52fbcae040a11c81586&language=en-US`;
        let data = await axios.get(imdb_video);
        data.data?.results?.forEach((e) => {
          if (e.type === "Trailer") setVideoId(e.key);
        });
      });
    };
    if (videoId !== "") getVideoId();
  }, [videoId]);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_poster">
        {movies.map((e) => {
          return (
            (e.poster_path || e.backdrop_path) && (
              <img
                src={
                  poster
                    ? `${baseUrl}${e.poster_path}`
                    : `${baseUrl}${e.backdrop_path}`
                }
                onClick={() => {
                  handleClick(e);
                }}
                alt="Couldn't load Image"
                className={`poster_image ${poster && "poster_large"}`}
                key={`${e.id}${title}`}
              />
            )
          );
        })}
      </div>

      {videoId !== "" ? (
        <YouTube
          className="youtube"
          key={videoId}
          opts={options}
          videoId={videoId}
        />
      ) : (
        false
      )}
    </div>
  );
}

export default Row;
