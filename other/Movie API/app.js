// const url = `https://www.omdbapi.com/?apikey=thewdb&s=${query}`

async function searchMovies() {
  const query = document.getElementById("search").value;

  const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`);

  const data = await res.json();

  const moviesDiv = document.getElementById("movies");

  moviesDiv.innerHTML = "";

  if (data.Search) {
    data.Search.forEach((movie) => {
      moviesDiv.innerHTML += `
      

      <img src=${movie.Poster} alt="Poster" >

      <h3>${movie.Title} </h3>

      <p>${movie.Year} </p>

      `;
    });
  } else {
    moviesDiv.innerHTML = "<p>No movies data found</p> ";
  }
}
