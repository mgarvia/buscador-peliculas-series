'use strict';

function addListenerToFavIcons() {
  let favIconsArr = document.querySelectorAll('.favourite__icon--movie');
  for (let icon of favIconsArr) {
    icon.addEventListener('click', saveFavouriteMovies);
  }
}

function paintDefaultFav(event) {
  let moviesArr = resultsList.querySelectorAll('li');
  for (let movie of moviesArr) {
    let MovieIndex = favouriteMovies.findIndex(favMovie => favMovie.id === movie.id);
    let favMovie = movie.firstElementChild.nextElementSibling.firstElementChild;
    if (MovieIndex !== -1) {
      addFavStyle(favMovie);
    }
  }
}

function saveFavouriteMovies(event) {
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
    addFavStyle(currentMovie);
  } else {
    let MovieIndex = favouriteMovies.findIndex(movie => movie.id === movieId);
    favouriteMovies.splice(MovieIndex, 1);
    removeFavStyle(currentMovie);
  }

  setToLocal();
  printFavouriteList();
  removeFavButton.classList.remove('hidden');
}

function addFavStyle(selectedMovie) {
  selectedMovie.classList.remove('heart__no-favourite');
  selectedMovie.classList.add('heart__favourite');
  selectedMovie.nextElementSibling.classList.add('favourite__textColor');
  selectedMovie.parentElement.previousElementSibling.classList.add('favourite__background');
}

function removeFavStyle(movie) {
  let moviesArr = document.querySelectorAll('.movie__item');
  const movieId = movie.parentElement.parentElement.id;

  for(let movie of moviesArr) {
    if(movie.id === movieId) {
      const selectedMovie = movie.firstElementChild.nextElementSibling.firstElementChild;
      selectedMovie.classList.remove('heart__favourite');
      selectedMovie.classList.add('heart__no-favourite');
      selectedMovie.nextElementSibling.classList.remove('favourite__textColor');
      selectedMovie.parentElement.previousElementSibling.classList.remove('favourite__background');
    }
  }
}

function printFavouriteList() {
  favouriteList.innerHTML = '';
  removeFavButton.classList.add('hidden');

  for(let movie of favouriteMovies) {

    const movieLi = document.createElement('li');
    movieLi.setAttribute('id', movie.id);
    movieLi.setAttribute('class', 'favourite__item');

    const movieImgBox = document.createElement('div');
    movieImgBox.setAttribute('class', 'favourite__image');

    const movieImgLink = document.createElement('a');
    movieImgLink.setAttribute('href', movie.url);
    movieImgLink.setAttribute('alt', `ver ficha de ${movie.title}`);
    movieImgLink.setAttribute('title', `ver ficha de ${movie.title}`);
    movieImgLink.setAttribute('target', 'local');

    const movieImg = document.createElement('img');
    movieImg.setAttribute('src', movie.image);

    const movieTitleBox = document.createElement('div');
    movieTitleBox.setAttribute('class', 'favourite__title--container');

    const movieIconFav = document.createElement('a');
    movieIconFav.setAttribute('class', 'favourite__icon favourite__icon--favList heart__favourite');
    movieIconFav.setAttribute('title', 'Eliminar de favoritos')

    const movieTitle = document.createElement('p');
    movieTitle.setAttribute('class', 'favourite__title');
    movieTitle.setAttribute('title', movie.title);
    const movieTitleContent = document.createTextNode(movie.title);

    favouriteList.appendChild(movieLi);
    movieLi.appendChild(movieImgBox);
    movieImgBox.appendChild(movieImgLink);
    movieImgLink.appendChild(movieImg);

    movieLi.appendChild(movieTitleBox);
    movieTitleBox.appendChild(movieIconFav);
    movieTitleBox.appendChild(movieTitle);
    movieTitle.appendChild(movieTitleContent);

    addListenerToFavourites();
  }
  if(favouriteList.innerHTML !== '') {
    removeFavButton.classList.remove('hidden')
  } else {
    removeFavButton.classList.add('hidden')
  }
}

function addListenerToFavourites() {
  let favIconArr = document.querySelectorAll('.favourite__icon--favList');
  for(let icon of favIconArr) {
    icon.addEventListener('click', saveFavouriteMovies);
  }
}
