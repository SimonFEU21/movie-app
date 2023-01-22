import React from "react";
import CardBig from "./CardBig";

function BigRow({ title, movieData, amount }) {
  return (
    <div>
      <div className="row mt-5">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
          <p className="title" style={{ color: "white" }}>
            {title}
          </p>
        </div>
      </div>
      <div className="row mt-2">
        {movieData.slice(0, amount).map((movie) => (
          <CardBig key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
}

export default BigRow;
