'use strict';

//Listado de resultados de búsqueda donde aparece el cartel de la serie y el título

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__button');
const resultsList = document.querySelector('.results__list');
const favourite = './assets/images/favourite.png';
const noFavourite = './assets/images/no-favourite.png';
const favouriteList = document.querySelector('.favourites__list');
const removeFavouriteListButton = document.querySelector('.favourite__button--remove');

const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesList = null; //array de resultados de búsqueda
let favouriteMovies = getFromLocal(); //array de favoritos en local


function searchMovies() { //Función para buscar la película conectando con la API
  event.preventDefault()
  fetch(urlBase + searchInput.value)
    .then(response => response.json())
    .then(data => {
      moviesList = data;
      printSearchResult(moviesList);
    })
}

function printSearchResult(moviesArr) { //Función para pintar el resultado de búsqueda
  resultsList.innerHTML = '';

  for (let movie of moviesArr) {
    let movieImage = movie.show.image;

    if (movieImage !== null) {
      movieImage = movie.show.image.medium
    } else {
      movieImage = `./assets/images/no-image-(yet).jpg`
    }

    resultsList.innerHTML += `<li id=${movie.show.id} class="movie__item">
            <div class="movie__image">
                <a href=${movie.show.url} alt="ver ficha de ${movie.show.name}" title="ver ficha de ${movie.show.name}" target="local">
                <img src=${movieImage}>
                </a>
            </div>
            <div class="movie__title--container">
                <a class="favourite__icon favourite__icon--movie heart__no-favourite"></a>
                <p class="movie__title" title="${movie.show.name}">${movie.show.name}<p/>
            </div>
            </li>`
    addListenerToMovies();
  }
  paintFav()
  
}

function paintFav() { //Función para dar estilo a los favoritos del resultado
  let moviesArr = resultsList.querySelectorAll('li')
  
  for (let movie of moviesArr) {
    let MovieIndex = favouriteMovies.findIndex(favMovie => favMovie.id === movie.id);
    let currentMovie = movie.firstElementChild.nextElementSibling.firstElementChild;
    if (MovieIndex !== -1) {
      //   console.log(currentMovie)
      SelectedMovie(currentMovie)
    }
  }
}

function addListenerToMovies() { //Función para añadir listener a corazones
  let favouriteIcons = document.querySelectorAll('.favourite__icon--movie');

  for (let icon of favouriteIcons) {
    icon.addEventListener('click', addToFavouriteMovies)
  }
}

function addToFavouriteMovies(event) { //Función para añadir a favoritos
  let currentMovie = event.currentTarget;
  let movieObject = {};
  const movieId = currentMovie.parentElement.parentElement.id;
  const movieTitle = currentMovie.nextElementSibling.title;
  const movieImage = currentMovie.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
  const movieLink = currentMovie.parentElement.previousElementSibling.firstElementChild.href;

  movieObject.id = movieId;
  movieObject.title = movieTitle;
  movieObject.image = movieImage;
  movieObject.link = movieLink;

  if (currentMovie.classList.contains('heart__no-favourite')) {
    favouriteMovies.push(movieObject)
    SelectedMovie(currentMovie);
  } else {
    let MovieIndex = favouriteMovies.findIndex(movie => movie.id === movieId);
    favouriteMovies.splice(MovieIndex, 1);
    NotSelectedMovie(currentMovie);
    removeFavStyleToMovie(currentMovie)
  }

  setToLocal();
  removeFavouriteListButton.classList.remove('hidden');
  printFavouriteList();
}

function SelectedMovie(selectedMovie) { //Función para resaltar favoritos
  selectedMovie.classList.remove('heart__no-favourite');
  selectedMovie.classList.add('heart__favourite');
  selectedMovie.nextElementSibling.classList.add('favourite__text')
  selectedMovie.parentElement.previousElementSibling.classList.add('favourite');
}

function NotSelectedMovie(selectedMovie) { //Función para quitar estilo de favoritos
  selectedMovie.classList.remove('heart__favourite');
  selectedMovie.classList.add('heart__no-favourite');
  selectedMovie.nextElementSibling.classList.remove('favourite__text')
  selectedMovie.parentElement.previousElementSibling.classList.remove('favourite');
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
    icon.addEventListener('click', addToFavouriteMovies)
  }

}

function removeFavStyleToMovie(movie) { //Función para quitar estilo en resultado de búsqueda si quitas desde favoritos
  let moviesArr = document.querySelectorAll('.movie__item')
  const movieId = movie.parentElement.parentElement.id;

  for(let movie of moviesArr) {
    if(movie.id === movieId) {
      const searchMovie = movie.firstElementChild.nextElementSibling.firstElementChild
      NotSelectedMovie(searchMovie)
      console.log(searchMovie)
    }
  }
}




function setToLocal() { //Función para guardar en local
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
}

function getFromLocal() { //Función para recuperar de local
  let savedFavouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies'));

  if (savedFavouriteMovies !== null) {
    return savedFavouriteMovies
  } else {
    return savedFavouriteMovies = []
  }
}

function removeAllFavourites() { //Función para borrar favoritos de pantalla y local
  let favItemsArr = document.querySelectorAll('.heart__favourite');

  for (let item of favItemsArr) {
    console.log(item)
    NotSelectedMovie(item)
  }
  
  localStorage.removeItem('favouriteMovies');
  favouriteList.innerHTML = '';
  removeFavouriteListButton.classList.add('hidden');

}

searchButton.addEventListener('click', searchMovies);
window.addEventListener('load', printFavouriteList);
removeFavouriteListButton.addEventListener('click', removeAllFavourites)
// addToFavouriteMovies()