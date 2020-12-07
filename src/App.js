import React, { useState } from "react";
import "./styles.css";

const movies = {
  SciFi: [
    {
      name: "Interstellar",
      rating: "10/10"
    },
    {
      name: "Inception",
      rating: "10/10"
    },
    {
      name: "The Matrix",
      rating: "9.5/10"
    },
    {
      name: "The Prestige",
      rating: "8.5/10"
    }
  ],
  Action: [
    {
      name: "Batman Begins",
      rating: "9/10"
    },
    {
      name: "The Dark Knight",
      rating: "10/10"
    },
    {
      name: "The Dark Knight Rises",
      rating: "9.5/10"
    },
    {
      name: "Gladiator",
      rating: "9.5/10"
    }
  ],
  Drama: [
    {
      name: "Titanic",
      rating: "10/10"
    },
    {
      name: "Fight Club",
      rating: "9.5/10"
    },
    {
      name: "The Shawshank Redemption",
      rating: "9/10"
    },
    {
      name: "Forrest Gump",
      rating: "8/10"
    }
  ]
};

export default function App() {
  var [movieGenre, setMovieGenre] = useState("SciFi");
  function clickHandler(event) {
    let genre = event.target.name;
    setMovieGenre(genre);
  }
  return (
    <div className="App">
      <h1>marvellousMovies</h1>
      <p>These are my favourite movies</p>

      <button name="SciFi" onClick={clickHandler}>
        Sci-Fi
      </button>

      <button name="Action" onClick={clickHandler}>
        Action
      </button>

      <button name="Drama" onClick={clickHandler}>
        Drama
      </button>

      <hr />
      {movies[movieGenre].map((item) => {
        return (
          <div id="list" key={item.name}>
            {item.name}
            <br />
            {item.rating}
          </div>
        );
      })}
    </div>
  );
}
