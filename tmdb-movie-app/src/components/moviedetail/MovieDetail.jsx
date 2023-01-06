import React from "react";
import { useState, useEffect } from "react";
import { fetchMovieDetail, fetchMovieVideos } from "../../service/";
import Trailer from "../trailer/Trailer";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
// import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import YouTube from "react-youtube";

function MovieDetail() {
  // const params = match.params;
  const params = useParams();
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  // const [casts, setCasts] = useState([]);
  // const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      // setCasts(await fetchCasts(params.id));
      // setSimilarMovie(await fetchSimilarMovie(params.id));
    };

    fetchAPI();
  }, [setVideo, params.id]);

  //manipulera useState variabel

  // let nummer = 10

  // nummer ++

  // setNummer(state => state++)

  useEffect(() => {
    console.log(video);
  }, [video]);

  genres = detail.genres;

  // const MoviePlayerModal = (props) => {
  //   const youtubeUrl = "https://youtube.com/watch?v=";

  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title
  //           id="contained-modal-title-vcenter"
  //           style={{ color: "#000000", fontWeight: "bolder" }}
  //         >
  //           {detail.title}
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body style={{ backgroundColor: "#000000" }}>
  //         <ReactPlayer
  //           className="container-fluid"
  //           url={youtubeUrl + fetchMovieVideos.key}
  //           // url={youtubeUrl + video.key}
  //           playing
  //           width="100%"
  //         ></ReactPlayer>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // };

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <Trailer id={video?.key} />
        <div className="col text-center" style={{ width: "100%" }}>
          <div className="mt-4">
            <p style={{ color: "white" }}>{detail.title}</p>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "white", fontWeight: "bolder" }}>GENRE</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genresList}</ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="text-center"></div>
          <div className="mt-3">
            <p style={{ color: "white", fontWeight: "bolder" }}>OVERVIEW</p>
            <p style={{ color: "white " }}>{detail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
