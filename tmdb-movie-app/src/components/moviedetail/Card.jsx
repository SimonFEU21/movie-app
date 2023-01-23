import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../noimage.png";
const posterBaseUrl = "https://image.tmdb.org/t/p/original/";

function Card({ movieData }) {
  let imgsrc = defaultImage;

  if (movieData.poster_path) {
    imgsrc = posterBaseUrl + movieData.poster_path;
  }

  return (
    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2">
      <Link to={`/movie/${movieData.id}`}>
        <div className="card">
          <div className="poster-info-title">
            <p className="poster-title">
              {movieData.title || movieData.original_name}
            </p>
            <p className="poster-title">
              {movieData?.release_date?.slice(0, 4) ||
                movieData?.first_air_date?.slice(0, 4)}
            </p>
          </div>
          <div className="img--container">
            <img
              className="img-fluid"
              src={imgsrc}
              alt={movieData.title || movieData.original_name}
            ></img>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        {/* <p style={{ color: "white" }}>{movieData.title}</p> */}
        {/* <p style={{ color: "white" }}>Rated: {movieData.rating}</p> */}
      </div>
    </div>
  );
}

export default Card;
