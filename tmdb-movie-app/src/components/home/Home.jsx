import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  // fetchPersons,
  fetchTopratedMovie,
  fetchTrending,
} from "../../service";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

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

  // const movies = nowPlaying?.map((item, index) => {
  //   return (
  //     <div style={{ height: 500, width: "100%" }} key={index}>
  //       <div className="carousel-center">
  //         <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
  //       </div>
  //       <div className="carousel-center">
  //         <i
  //           className="far fa-play-circle"
  //           style={{ fontSize: 95, color: "#f4c10f" }}
  //         ></i>
  //       </div>
  //       <div
  //         className="carousel-caption"
  //         style={{ textAlign: "center", fontSize: 35 }}
  //       >
  //         {item.title}
  //       </div>
  //     </div>
  //   );
  // });

  // const genreList = genres.map((item, index) => {
  //   return (
  //     <li className="list-inline-item" key={index}>
  //       <button
  //         type="button"
  //         className="btn btn-outline-info"
  //         onClick={() => {
  //           handleGenreClick(item.id);
  //         }}
  //       >
  //         {item.name}
  //       </button>
  //     </li>
  //   );
  // });

  // const movieList = movieByGenre.slice(0, 4).map((item, index) => {
  //   return (
  //     <div className="col-md-3 col-sm-6" key={index}>
  //       <div className="card">
  //         <Link to={`/movie/${item.id}`}>
  //           <img className="img-fluid" src={item.poster} alt={item.title}></img>
  //         </Link>
  //       </div>
  //       <div className="mt-3">
  //         <p style={{ fontWeight: "bolder" }}>{item.title}</p>
  //         {/* <p>Rated: {item.rating}</p> */}
  //         {/* <ReactStars
  //           count={item.rating}
  //           size={20}
  //           color1={"#f4c10f"}
  //         ></ReactStars> */}
  //       </div>
  //     </div>
  //   );
  // });

  // const trendingPersons = persons.slice(0, 4).map((p, i) => {
  //   return (
  //     <div className="col-md-3 text-center" key={i}>
  //       <img
  //         className="img-fluid rounded-circle mx-auto d-block"
  //         src={p.profileImg}
  //         alt={p.name}
  //       ></img>
  //       <p className="font-weight-bold text-center">{p.name}</p>
  //       <p
  //         className="font-weight-light text-center"
  //         style={{ color: "#5a606b" }}
  //       >
  //         Trending for {p.known}
  //       </p>
  //     </div>
  //   );
  // });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ color: "white" }}>{item.title} </p>
          <p style={{ color: "white" }}>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  const nowPlayingList = nowPlaying.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ color: "white" }}>{item.title}</p>
          <p style={{ color: "white" }}>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  const trendingList = trending.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img
              className="img-fluid"
              src={item.backPoster}
              alt={item.title}
            ></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ color: "white" }}>{item.title}</p>
          <p style={{ color: "white" }}>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      {/* <input type="text" placeholder="search" /> */}
      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
          <p className="font-weight-bold" style={{ color: "white" }}>
            TRENDING
          </p>
        </div>
      </div>
      <div className="row mt-3">{trendingList}</div>

      <div className="row mt-3">
        <div className="col">
          {/* <ul className="list-inline">"genreList"</ul> */}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "white" }}>
            NOW PLAYING
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
      <div className="row mt-3">{nowPlayingList}</div>

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
          <p className="font-weight-bold" style={{ color: "white" }}>
            TOP RATED MOVIES
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
      <div className="row mt-3">{topRatedList}</div>

      <hr className="mb-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
    </div>
  );
}

export default Home;
