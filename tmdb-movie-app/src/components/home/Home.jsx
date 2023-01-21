import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  // fetchPersons,
  fetchTopratedMovie,
  fetchTrending,
} from "../../service";
import { Link } from "react-router-dom";
import "../../App.css";
// import ReactStars from "react-rating-stars-component";
const posterBaseUrl = "https://image.tmdb.org/t/p/original/";
function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  // const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setTrending(await fetchTrending());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      // setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const trendingList = trending.slice(0, 2).map((item, index) => {
    return (
      <div className="col-md-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <div className="card">
              <div className="poster-info-title-trending">
                <p className="poster-title-trending">
                  {item.title || item.original_name}
                </p>
                <p className="poster-year-trending">
                  {item?.release_date?.slice(0, 4) ||
                    item?.first_air_date?.slice(0, 4)}
                </p>
              </div>
              <img
                className="img-fluid"
                src={posterBaseUrl + item.backdrop_path}
                alt={item.title || item.original_name}
              ></img>
            </div>
          </Link>
        </div>

        <div className="mt-3">
          {/* <p style={{ color: "white" }}> */}
          {/* {item.title || item.name || item.original_name} */}
          {/* </p> */}
          {/* <p style={{ color: "white" }}>Rated: {item.rating}</p> */}
        </div>
      </div>
    );
  });

  const nowPlayingList = nowPlaying.slice(0, 6).map((item, index) => {
    return (
      <div className="col-md-2" key={index}>
        <Link to={`/movie/${item.id}`}>
          <div className="card">
            <div className="poster-info-title">
              <p className="poster-title">{item.title || item.original_name}</p>
              <p className="poster-title">
                {item?.release_date?.slice(0, 4) ||
                  item?.first_air_date?.slice(0, 4)}
              </p>
            </div>
            <img
              className="img-fluid"
              src={posterBaseUrl + item.poster_path}
              alt={item.title || item.original_name}
            ></img>
          </div>
        </Link>
        <div className="mt-3">
          {/* <p style={{ color: "white" }}>{item.title}</p> */}
          {/* <p style={{ color: "white" }}>Rated: {item.rating}</p> */}
        </div>
      </div>
    );
  });

  const topRatedList = topRated.slice(0, 6).map((item, index) => {
    return (
      <div className="col-md-2" key={index}>
        <Link to={`/movie/${item.id}`}>
          <div className="card">
            <div className="poster-info-title">
              <p className="poster-title">{item.title || item.original_name}</p>
              <p className="poster-title">
                {item?.release_date?.slice(0, 4) ||
                  item?.first_air_date?.slice(0, 4)}
              </p>
            </div>
            <img
              className="img-fluid"
              src={posterBaseUrl + item.poster_path}
              alt={item.title || item.original_name}
            ></img>
          </div>
        </Link>
        <div className="mt-3">
          {/* <p style={{ color: "white" }}>{item.title} </p>
          <p style={{ color: "white" }}>Rated: {item.rating}</p> */}
        </div>
      </div>
    );
  });

  return (
    <div className="containeR">
      {/* <input type="text" placeholder="search" /> */}
      <div className="row mt-5">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
          <p className="title" style={{ color: "white" }}>
            Trending
          </p>
        </div>
      </div>
      <div className="row mt-2">{trendingList}</div>

      <div className="row mt-3">
        <div className="col">
          {/* <ul className="list-inline">"genreList"</ul> */}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p className="title" style={{ color: "white" }}>
            Now playing
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-2">{nowPlayingList}</div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      {/* <div className="row mt-3">{trendingPersons}</div> */}

      <div className="row mt-3">
        <div className="col">
          <p className="title" style={{ color: "white" }}>
            Top rated movies
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-2">{topRatedList}</div>
    </div>
  );
}

export default Home;
