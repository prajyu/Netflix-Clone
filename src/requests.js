const API_KEY = "78af33e749d0a52fbcae040a11c81586";

const requests = {
  Originals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
