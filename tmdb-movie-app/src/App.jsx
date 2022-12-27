import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";

export function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </main>
  );
}

export default App;
