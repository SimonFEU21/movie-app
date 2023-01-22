import React from "react";
import { Link } from "react-router-dom";
const posterBaseUrl = "https://image.tmdb.org/t/p/original/";
function CardBig({ movieData }) {
  return (
    <div className="col-md-6">
      <div className="card">
        <Link to={`/movie/${movieData.id}`}>
          <div className="card">
            <div className="poster-info-title-trending">
              <p className="poster-title-trending">
                {movieData.title || movieData.original_name}
              </p>
              <p className="poster-year-trending">
                {movieData?.release_date?.slice(0, 4) ||
                  movieData?.first_air_date?.slice(0, 4)}
              </p>
            </div>
            <img
              className="img-fluid"
              src={posterBaseUrl + movieData.backdrop_path}
              alt={movieData.title || movieData.original_name}
            ></img>
          </div>
        </Link>
      </div>

      <div className="mt-3">
        {/* <p style={{ color: "white" }}> */}
        {/* {movieData.title || movieData.name || movieData.original_name} */}
        {/* </p> */}
        {/* <p style={{ color: "white" }}>Rated: {movieData.rating}</p> */}
      </div>
    </div>
  );
}

export default CardBig;
