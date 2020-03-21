'use strict';

searchButton.addEventListener('click', searchMovies);
window.addEventListener('load', printFavouriteList);
removeFavButton.addEventListener('click', removeAllFavourites);


// LISTENERS DE FUNCIONES EXTRA
searchInput.addEventListener('mouseover', changePlaceholder);
searchInput.addEventListener('mouseout', originalPlaceholder);
searchInput.addEventListener('click', moveSearchInput);
searchInput.addEventListener('keyup', originalTitle);
searchInput.addEventListener('focus', enableSearchButton)
welcomeText.addEventListener('click', setPointerInInput)