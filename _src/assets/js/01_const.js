'use strict';

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__button');
const searchText = document.querySelector('.search__text');
const resultTitle = document.querySelector('.results__title');
const resultsList = document.querySelector('.results__list');
const favouriteList = document.querySelector('.favourites__list');
const removeFavButton = document.querySelector('.favourite__remove--button');
const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesSearchedList = null;
let favouriteMovies = getFromLocal();

// VARIABLES DE FUNCIONES EXTRA

const iconSearch = document.querySelector('.icon__search--container');
const titleSearch = document.querySelector('#missing-o');
const removeSearchBtn = document.querySelector('.remove__search--button');
const welcome = document.querySelector('.landing');
const inputBox = document.querySelector('.search__container');
const favMessage = document.querySelector('.favourites__message');
const welcomeText = document.querySelector('.welcome');