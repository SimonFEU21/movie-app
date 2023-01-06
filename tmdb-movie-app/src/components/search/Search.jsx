import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSearchMovieUrl } from "../../service";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchSearchMovieUrl(params?.query));
    };

    fetchAPI();
  }, [params.query]);

  const movieList = movies?.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        {/* <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
        </div> */}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col"></div>
        <p className="font-weight-bold" style={{ color: "white" }}>
          Search
        </p>
        <ul style={{ color: "white" }}></ul>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row">
        {movieList || (
          <div className="row mt-3" style={{ color: "white" }}>
            {}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
