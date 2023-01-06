import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import { useState } from "react";
import Search from "./components/search/Search";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      navigate("/");
      return;
    }
    navigate(`/search/${searchQuery}`);
  };

  return (
    <main className="row">
      <div className="col-1 col-md-2 border-end">
        <Navbar />
      </div>
      <div className="col-11 col-md-10">
        <div className="container">
          <form onSubmit={submit}>
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="search"
            />
          </form>
        </div>
        <Routes>
          <Route path="/search/:query" element={<Search />} />
          <Route exact={true} path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
