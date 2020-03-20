'use strict';

//Listado de constantes utilizadas a lo largo de todo el proyecto

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__button');
const resultsList = document.querySelector('.results__list');
const favourite = './assets/images/favourite.png';
const noFavourite = './assets/images/no-favourite.png';
const favouriteList = document.querySelector('.favourites__list');
const removeFavouriteListButton = document.querySelector('.favourite__button--remove');

const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesList = null; //array de resultados de búsqueda
let favouriteMovies = getFromLocal(); //array de favoritos
