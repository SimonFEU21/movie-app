import React from "react";
import { useParams } from "react-router-dom";
import requests from "../../service";
import Footer from "../footer";
import Row from "../moviedetail/Row";

const Search = () => {
  const params = useParams();

  return (
    <div className="searchContainer">
      <div>
        <Row
          title="Search Result"
          fetchURL={requests.fetchSearchMovie + params?.query}
          BigSize={false}
          amount={24}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
