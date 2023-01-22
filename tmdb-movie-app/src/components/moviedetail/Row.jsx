import React, { useState, useEffect } from "react";
import axios from "../../service/axios";
import BigRow from "./BigRow";
import SmallRow from "./SmallRow";
function Row({ title, fetchURL, fetchDisover, BigSize, amount }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(await request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      {!BigSize ? (
        <SmallRow
          title={title}
          movieData={fetchDisover || movies}
          amount={amount}
        />
      ) : (
        <BigRow title={title} movieData={movies} amount={amount} />
      )}
    </div>
  );
}

export default Row;
