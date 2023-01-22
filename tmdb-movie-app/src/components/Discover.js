import React from "react";
import { useState, useEffect } from "react";
import { fetchGenre, fetchMovieByGenre } from "../service";
import Footer from "./footer";
import Row from "./moviedetail/Row";

const Discover = () => {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          style={{ border: "1px solid white", borderRadius: "100px" }}
          className="btn btn-outline-info mt-2"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  return (
    <div className="discover--Container">
      <div className="row mt-5 ">
        <div className="col">
          <p className="title" style={{ color: "white" }}>
            Discover
          </p>
        </div>

        <ul style={{ color: "white" }}></ul>
      </div>

      <div className="row mb-1">
        <div className="col">
          <ul className="list-inline genreList">{genreList}</ul>
        </div>
      </div>

      <Row fetchDisover={movieByGenre} BigSize={false} amount={20} />

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
