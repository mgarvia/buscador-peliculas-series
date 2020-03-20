'use strict';

// Funciones para guradar en favoritos y estilos

function addListenerToFavIcons() {
  let favIconsArr = document.querySelectorAll('.favourite__icon--movie');

  for (let icon of favIconsArr) {
    icon.addEventListener('click', addToFavouriteMovies);
    icon.addEventListener('click', paintFav);
  }
}

function addToFavouriteMovies(event) {
  let currentMovie = event.currentTarget;
  const movieId = currentMovie.parentElement.parentElement.id;
  const movieTitle = currentMovie.nextElementSibling.title;
  const movieImage = currentMovie.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
  const movieLink = currentMovie.parentElement.previousElementSibling.firstElementChild.href;

  let movieObject = {};
  movieObject.id = movieId;
  movieObject.title = movieTitle;
  movieObject.image = movieImage;
  movieObject.link = movieLink;

  if (currentMovie.classList.contains('heart__no-favourite')) {
    favouriteMovies.push(movieObject);
    // addFavStyle(currentMovie);
  } else {
    let MovieIndex = favouriteMovies.findIndex(movie => movie.id === movieId);
    favouriteMovies.splice(MovieIndex, 1);
    // removeFavStyle(currentMovie);
    removeFavStyleFromResult(currentMovie);
  }

  setToLocal();
//   printFavouriteList();
//   removeFavouriteListButton.classList.remove('hidden');
}

function paintFav() {
    let moviesArr = resultsList.querySelectorAll('li');
  
    for (let movie of moviesArr) {
      let MovieIndex = favouriteMovies.findIndex(favMovie => favMovie.id === movie.id);
      let currentMovie = movie.firstElementChild.nextElementSibling.firstElementChild;
      if (MovieIndex !== -1) {
        addFavStyle(currentMovie);
      } else {
        removeFavStyle(currentMovie);
      }
    }
    printFavouriteList();
  }

function addFavStyle(selectedMovie) {
  selectedMovie.classList.remove('heart__no-favourite');
  selectedMovie.classList.add('heart__favourite');
  selectedMovie.nextElementSibling.classList.add('favourite__textColor');
  selectedMovie.parentElement.previousElementSibling.classList.add('favourite__background');
}

function removeFavStyle(selectedMovie) {
  selectedMovie.classList.remove('heart__favourite');
  selectedMovie.classList.add('heart__no-favourite');
  selectedMovie.nextElementSibling.classList.remove('favourite__textColor');
  selectedMovie.parentElement.previousElementSibling.classList.remove('favourite__background');
}

function removeFavStyleFromResult(movie) { //Función para quitar estilo en resultado de búsqueda si quitas desde favoritos
    let moviesArr = document.querySelectorAll('.movie__item');
    const movieId = movie.parentElement.parentElement.id;
  
    for(let movie of moviesArr) {
      if(movie.id === movieId) {
        const searchMovie = movie.firstElementChild.nextElementSibling.firstElementChild;
        removeFavStyle(searchMovie);
        console.log(searchMovie);
      }
    }
  }

function printFavouriteList() { //Función para pintar la lista de favoritos
  favouriteList.innerHTML = '';
  for(let movie of favouriteMovies) {
    favouriteList.innerHTML += `<li id=${movie.id} class="favourite__item">
          <div class="favourite__image">
              <a href=${movie.link} alt="ver ficha de ${movie.title}" title="ver ficha de ${movie.title}" target="local">
              <img src=${movie.image}>
              </a>
          </div>
          <div class="favourite__title--container">
              <a class="favourite__icon favourite__icon--favList heart__favourite"></a>
              <p class="favourite__title" title="${movie.title}">${movie.title}<p/>
          </div>
          </li>`
    ;
    addListenerToFavourites();
  }
}



function addListenerToFavourites() { //Función para añadir escuchadores a corazones de favoritos
  let favIconArr = document.querySelectorAll('.favourite__icon--favList');

  for(let icon of favIconArr) {
    icon.addEventListener('click', addToFavouriteMovies);
  }

}

