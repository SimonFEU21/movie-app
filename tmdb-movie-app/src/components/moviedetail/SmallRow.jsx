import React from "react";
import Card from "./Card";

function SmallRow({ title, movieData, amount }) {
  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <p className="title" style={{ color: "white" }}>
            {title}
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        {movieData.length ? (
          movieData
            .slice(0, amount)
            .map((movie) => <Card key={movie.id} movieData={movie} />)
        ) : (
          <h5 style={{ color: "white" }}>No movies found!</h5>
        )}
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallRow;
