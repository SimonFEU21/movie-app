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
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        BigSize={false}
        amount={6}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        BigSize={false}
        amount={6}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        BigSize={true}
        amount={2}
      />
      <Footer />
    </div>
  );
}
export default Home;
