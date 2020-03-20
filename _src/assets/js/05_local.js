'use strict';

function setToLocal() {
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
}

function getFromLocal() {
  let savedFavouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies'));

  if (savedFavouriteMovies !== null) {
    return savedFavouriteMovies;
  } else {
    return savedFavouriteMovies = [];
  }
}

function removeFromLocal() {
  localStorage.removeItem('favouriteMovies');
}
