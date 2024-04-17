import React, { useEffect, useState } from "react";

const Data = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://wizard-world-api.herokuapp.com/Houses")
    //   .then((res) => res.json())
    //   .then((datarr) => setData(datarr));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmEyNDE2YjUzZTlkZTliN2IzZWRmNTUyODUyYTVmYiIsInN1YiI6IjY2MWZhZDNlZDc1YmQ2MDE0OTMxMTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvswNn37jr5lMngJc3eqEbxrdN4FM8CzEMUv7uyD4Cs",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/account/21218863/rated/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map((dat, index) => (
          <li key={index}>
            {" "}
            <h1>{dat.name}</h1>
            {console.log(dat)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
