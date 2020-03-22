'use strict';

// VARIABLES FOR BASIC FUNCTIONS

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__submit--button'); 
const searchText = document.querySelector('.search__text');
const resultTitle = document.querySelector('.results__title');
const resultsList = document.querySelector('.results__list');
const favouriteList = document.querySelector('.favourites__list');
const removeFavButton = document.querySelector('.favourite__remove--button');
const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesSearchedList = null;
let favouriteMovies = getFromLocal();


// VARIABLES FOR ESTRA FUNCTIONS

const form = document.querySelector('.search__form');
const inputBox = document.querySelector('.search__container');
const searchIcon = document.querySelector('.icon__search--container');
const removeSearchBtn = document.querySelector('.search__remove--button');
const titleSearch = document.querySelector('#missing-o');
const favSection = document.querySelector('.favourites');
const favListSection = document.querySelector('.favourites__list--container')
const favMessage = document.querySelector('.favourites__list--message');
const welcome = document.querySelector('.landing');
const welcomeText = document.querySelector('.welcome');
