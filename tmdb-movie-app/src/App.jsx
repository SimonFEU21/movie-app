import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";

export function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
