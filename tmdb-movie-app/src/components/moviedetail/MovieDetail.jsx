import React from "react";
import { useState, useEffect } from "react";
import { fetchMovieDetail, fetchMovieVideos } from "../../service/";
import Trailer from "../trailer/Trailer";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function MovieDetail() {
  const params = useParams();
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
    };

    fetchAPI();
  }, [setVideo, params.id]);

  useEffect(() => {
    console.log(video);
  }, [video]);

  genres = detail.genres;

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button
            type="button"
            className="btn btn-outline-info"
            style={{
              border: "1px solid white",
              borderRadius: "100px",
              cursor: "default",
            }}
          >
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <Trailer id={video?.key} />
        <div style={{ width: "100%" }}>
          <div className="title mt-4">
            <p style={{ color: "white" }}>{detail.title}</p>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          {/* <p style={{ color: "white", fontWeight: "bolder" }}>GENRE</p> */}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genresList}</ul>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <p style={{ color: "white", fontWeight: "bolder" }}>OVERVIEW</p>
          <p style={{ color: "white" }}>{detail.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
