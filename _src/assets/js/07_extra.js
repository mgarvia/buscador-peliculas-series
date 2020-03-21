'use strict' 

function changePlaceholder() {
    searchInput.placeholder = 'Escribe un título aquí';
}

function originalPlaceholder() {
    searchInput.placeholder = 'Series & películas';
}

function moveSearchInput() {
    

    iconSearch.classList.add('moveIcon');
    titleSearch.classList.add('show-o');
    titleSearch.classList.remove('hidden-o');

    addListenerToIconSearch();
}

function addListenerToIconSearch() {
    iconSearch.addEventListener('click', searchMovies);
}

function originalTitle() {
    if(searchInput.value !== '') {
    iconSearch.classList.add('moveIcon');
    titleSearch.classList.add('show-o');
    titleSearch.classList.remove('hidden-o');
    } else {
    iconSearch.classList.remove('moveIcon');
    titleSearch.classList.remove('show-o');
    titleSearch.classList.add('hidden-o');
    }
}

searchInput.addEventListener('mouseover', changePlaceholder);
searchInput.addEventListener('mouseout', originalPlaceholder);
searchInput.addEventListener('click', moveSearchInput);
// window.addEventListener('click', originalTitle)
