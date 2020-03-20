'use strict';


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
    favouriteList.innerHTML = '';
    removeFavouriteListButton.classList.add('hidden');
    localStorage.removeItem('favouriteMovies');
  }
  
