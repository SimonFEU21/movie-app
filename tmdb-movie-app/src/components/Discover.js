import React from 'react'
import { useState, useEffect } from 'react';
import { fetchDiscoverUrl, fetchGenre, fetchMovieByGenre } from '../service';
import { Link } from 'react-router-dom';



const Discover = () => {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDiscover(await fetchDiscoverUrl());
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
            className="btn btn-outline-info"
            onClick={() => {
              handleGenreClick(item.id);
            }}
          >
            {item.name}
          </button>
        </li>
      );
    });

    const movieList = movieByGenre?.slice(0,9).map((item, index) => {
        return (
          <div className="col-md-2" key={index}>
            <div className="card">
              <Link to={`/movie/${item.id}`}>
                <img className="img-fluid" src={item.poster} alt={item.title}></img>
              </Link>
            </div>
            <div className="movieTitle mt-3">
              <p>{item.title}</p>
            </div>
          </div>
        );
      });


  // const discoverList = discover.slice(0, 4).map((item, index) => {
  //   return (
  //     <div className="col-md-3" key={index}>
  //       <div className="card">
  //         <Link to={`/movie/${item.id}`}>
  //           <img className="img-fluid" src={item.poster} alt={item.title}></img>
  //         </Link>
  //       </div>
  //       <div className="mt-3">
  //         <p style={{ fontWeight: "bolder" }}>{item.title}</p>
  //         <p>Rated: {item.rating}</p>
  //       </div>
  //     </div>
  //   );
  // });




  return (
    <div className="container">
        <div className="row mt-5">
        <div className="col">
        </div>
          <p className="title" style={{ color: "white" }}>
            Discover
          </p>
          <ul style={{ color: "white" }} >
      </ul>
      </div>

      <div className="row mt-1 ">
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
      
      {/* <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{}</ul>
        </div>
      </div> */}

  


     <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className='row'>
      {movieList || ( <div style={{ color: "white" }}></div>)}
      </div>
    </div>
  )
}

export default Discover