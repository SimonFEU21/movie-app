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

  const discoverList = discover.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <input type="text" placeholder='search'/>
     
        <div className="row mt-3">
        <div className="col">
        </div>
          <p className="font-weight-bold" style={{ color: "white" }}>
            Discover
          </p>
          <ul className style={{ color: "white" }} >
        <li>dfsaas</li>
        <li>dfsaas</li>
        <li>dfsaas</li>
        <li>dfsaas</li>
        <li>dfsaas</li>
        <li>dfsaas</li>
      </ul>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className= "row mt-3" style={{ color: "white" }} >{discoverList} </div>
    </div>
  )
}

export default Discover