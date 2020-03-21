'use strict';

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__button');
const resultsList = document.querySelector('.results__list');
const favouriteList = document.querySelector('.favourites__list');
const removeFavButton = document.querySelector('.favourite__button--remove');
const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesSearchedList = null;
let favouriteMovies = getFromLocal();

// VARIABLES DE FUNCIONES EXTRA

const iconSearch = document.querySelector('.icon__search--container');
    const titleSearch = document.querySelector('#missing-o');