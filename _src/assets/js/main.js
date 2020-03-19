'use strict';

//Listado de resultados de búsqueda donde aparece el cartel de la serie y el título

const searchInput = document.querySelector('#search__input');
const searchButton = document.querySelector('.search__button');
const resultsList = document.querySelector('.results__list');

const urlBase = 'http://api.tvmaze.com/search/shows?q=';

let moviesList = null; //array de resultados de búsqueda


function searchMovies() { //Función para buscar la película conectando con la API
    event.preventDefault()
    fetch(urlBase + searchInput.value)
    .then (response => response.json())
    .then (data => {
        moviesList = data;
        console.log(moviesList)
        printSearchResult(moviesList)
    })
}

function printSearchResult(moviesArr) {

    for(let movie of moviesArr) {
        let movieImage = movie.show.image;

        
        if(movieImage !== null) {
            movieImage = movie.show.image.medium
         } else {
            movieImage = `./assets/images/no-image-(yet).jpg`
         }

        resultsList.innerHTML += `<li id=${movie.show.id} class="movie__item">
          <a href=${movie.show.url} alt="ver ficha de ${movie.show.name}" title="ver ficha de ${movie.show.name}" target="local">
            <img src=${movieImage}>
          </a>
          <div class="movie__title--container">
            <img class="favourite__icon" src="./assets/images/no-favourite.png">
            <p class="movie__title">${movie.show.name}<p/>
          </div>
          
        </li>`


    }

}


searchButton.addEventListener('click', searchMovies);