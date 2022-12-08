import React, { useState, useEffect } from "react";

import {
  fetchMovies,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from "../../service";

import { Link } from "react-router-dom";

export function Discover() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [topRated, setTopRated] = useState([]);
}
