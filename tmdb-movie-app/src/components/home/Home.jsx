import React from "react";
import requests from "../../service/index";
import "../../App.css";
import Row from "../moviedetail/Row";
import Footer from "../footer";

function Home() {
  return (
    <div className="containeR">
      <Row
        title="Trending"
        fetchURL={requests.fetchTrending}
        BigSize={true}
        amount={2}
      />
      <Row
        title="Now Playing"
        fetchURL={requests.fetchNowPlaying}
        BigSize={false}
        amount={6}
      />

      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        BigSize={false}
        amount={6}
      />

      <Row
        title="Top Rated"
        fetchURL={requests.fetchToprated}
        BigSize={true}
        amount={4}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        BigSize={false}
        amount={6}
      />

      <Row
        title="War Movies"
        fetchURL={requests.fetchWarMovies}
        BigSize={false}
        amount={6}
      />
      <Row
        title="Sci-fi Movies"
        fetchURL={requests.fetchSciFiMovies}
        BigSize={false}
        amount={6}
      />
      <Row
        title="Tv Movies"
        fetchURL={requests.fetchTvMovies}
        BigSize={true}
        amount={6}
      />
      <Row
        title="Animated Movies"
        fetchURL={requests.fetchAnimatedMovies}
        BigSize={false}
        amount={6}
      />
      <Row
        title="Fantasy Movies"
        fetchURL={requests.fetchFantasyMovies}
        BigSize={false}
        amount={6}
      />
      <Footer />
    </div>
  );
}
export default Home;
