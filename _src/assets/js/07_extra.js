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
    addRemoveSearchButton()
}

function addListenerToIconSearch() {
    iconSearch.addEventListener('click', searchMovies);
    iconSearch.style.cursor = 'pointer';
}

function addRemoveSearchButton() {
    removeSearchBtn.classList.remove('hidden');
    addListenerToRemoveBtn();
}

function addListenerToRemoveBtn() {
    removeSearchBtn.addEventListener('click', removeTextSearch)
}

function removeTextSearch() {
    searchInput.value = '';
    originalTitle();
}

function originalTitle() {
    if(searchInput.value !== '') {
    iconSearch.classList.add('moveIcon');
    titleSearch.classList.add('show-o');
    titleSearch.classList.remove('hidden-o');
    removeSearchBtn.classList.remove('hidden');
    } else {
    iconSearch.style.cursor = '';
    iconSearch.classList.remove('moveIcon');
    titleSearch.classList.remove('show-o');
    titleSearch.classList.add('hidden-o');
    removeSearchBtn.classList.add('hidden');
    }
}

searchInput.addEventListener('mouseover', changePlaceholder);
searchInput.addEventListener('mouseout', originalPlaceholder);
searchInput.addEventListener('click', moveSearchInput);
searchInput.addEventListener('keyup', originalTitle);

