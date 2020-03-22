'use strict';

searchButton.addEventListener('click', searchMovies);
window.addEventListener('load', printFavouriteList);
removeFavButton.addEventListener('click', removeAllFavourites);


// LISTENERS FOR FUNCIONES EXTRA //
searchInput.addEventListener('mouseover', changePlaceholder);
searchInput.addEventListener('mouseout', originalPlaceholder);
searchInput.addEventListener('click', moveSearchIcon);
searchInput.addEventListener('focusout', originalTitle);
searchInput.addEventListener('focus', enableSearchButton)
welcomeText.addEventListener('click', setPointerInInput);
form.addEventListener('invalid', disableValidationMessage,true);
favTitleSection.addEventListener('click', showFavList)