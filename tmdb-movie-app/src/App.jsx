import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import { useWindowSize } from "./hooks/useWindowSize";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const windowSize = useWindowSize();

  const [mobileView, setMobileView] = useState(Boolean);
  const [hamburgerMenu, setHamburgerMenu] = useState(Boolean);

  useEffect(() => {
    if (windowSize.width <= 1740) {
      setMobileView(true);
    } else setMobileView(false);
    console.log(windowSize);
  }, [windowSize]);

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
      {/* <div className={`col-1 border-end `}> */}
      <Navbar isMobile={mobileView} />
      {/* </div> */}
      <div className="col-11 col-md-10 mt-5">
        <div className="container">
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

        {/* <hr
          className="mt-5 mb-4"
          style={{ borderTop: "1px solid #5a606b" }}
        ></hr> */}

        <div className="footNote" style={{ color: "#838383" }}>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb
        </div>
      </div>
    </main>
  );
}

export default App;
