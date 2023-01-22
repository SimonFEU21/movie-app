import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import { IoSearchOutline } from "react-icons/io5";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const [width, setWidth] = useState("");
  const [hamburgerMenu, setHamburgerMenu] = useState(Boolean);

  const submit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      navigate("/");
      return;
    }
    navigate(`/search/${searchQuery}`);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <main className="main--Container">
      <div className="NavBar--Container">
        <Navbar />
      </div>

      {/* </div> */}
      <div className="col-11 col-md-10 mt-5 ">
        <div className="formContainer">
          <form onSubmit={submit}>
            <input
              className="searchBar"
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search movie titles"
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
