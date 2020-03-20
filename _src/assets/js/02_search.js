'use strict';

function searchMovies() {
  event.preventDefault();
  fetch(urlBase + searchInput.value)
    .then(response => response.json())
    .then(data => {
      moviesSearchedList = data;
      printSearchResult(moviesSearchedList);
    });
}

function printSearchResult(moviesArr) {
  resultsList.innerHTML = '';

  for (let movie of moviesArr) {
    let movieImage = movie.show.image;

    if (movieImage !== null) {
      movieImage = movie.show.image.medium;
    } else {
      movieImage = `./assets/images/no-image-(yet).jpg`;
    }

    const movieLi = document.createElement('li');
    movieLi.setAttribute('id', movie.show.id);
    movieLi.setAttribute('class', 'movie__item');

    const movieImgBox = document.createElement('div');
    movieImgBox.setAttribute('class', 'movie__image');

    const movieImgLink = document.createElement('a');
    movieImgLink.setAttribute('href', movie.show.url);
    movieImgLink.setAttribute('alt', `ver ficha de ${movie.show.name}`);
    movieImgLink.setAttribute('title', `ver ficha de ${movie.show.name}`);
    movieImgLink.setAttribute('target', 'local');

    const movieImg = document.createElement('img');
    movieImg.setAttribute('src', movieImage);

    const movieTitleBox = document.createElement('div');
    movieTitleBox.setAttribute('class', 'movie__title--container');

    const movieIconFav = document.createElement('a');
    movieIconFav.setAttribute('class', 'favourite__icon favourite__icon--movie heart__no-favourite');

    const movieTitle = document.createElement('p');
    movieTitle.setAttribute('class', 'movie__title');
    movieTitle.setAttribute('title', movie.show.name);
    const movieTitleContent = document.createTextNode(movie.show.name);

    resultsList.appendChild(movieLi);

    movieLi.appendChild(movieImgBox);
    movieImgBox.appendChild(movieImgLink);
    movieImgLink.appendChild(movieImg);

    movieLi.appendChild(movieTitleBox);
    movieTitleBox.appendChild(movieIconFav);
    movieTitleBox.appendChild(movieTitle);
    movieTitle.appendChild(movieTitleContent);

    addListenerToFavIcons();
  }
  paintDefaultFav();
}
