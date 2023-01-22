import axios from "axios";
const apiKey = "d4da566d6202b6238607a02cf39337cf";
const url = "https://api.themoviedb.org/3";
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const getGenreUrl = `${url}/discover/movie`;

const requests = {
  fetchNowPlaying: `/movie/now_playing?api_key=${apiKey}&language=en_us`,
  fetchToprated: `/movie/popular?api_key=${apiKey}`,
  fetchMovie: `/movie?api_key=${apiKey}`,
  fetchtGenre: `/genre/movie/list?api_key=${apiKey}`,
  fetchDiscover: `/discover/movie?api_key=${apiKey}`,
  fetchGetGenre: `/discover/movie?api_key=${apiKey}`,
  fetchSearchMovie: `/search/movie?api_key=${apiKey}&query=`,
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en_us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en_us`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};


export default requests;

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(getGenreUrl, {
      params: {
        api_key: apiKey,
        // language: 'en_US',
        page: 1,
        with_genres: genre_id,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));

    return data.results;
  } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    return data;
  } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data["results"].filter(
      (item) =>
        item.site.toLowerCase() === "youtube" &&
        item.type.toLowerCase() === "trailer"
    )[0];
  } catch (error) {}
};
