'use strict'

function changePlaceholder() {
  searchInput.placeholder = 'Escribe un título aquí';
}

function originalPlaceholder() {
  searchInput.placeholder = 'Series & películas';
}

function moveSearchIcon() {

  searchIcon.classList.add('moveIcon');
  titleSearch.classList.add('show-o');
  titleSearch.classList.remove('hide-o');
  inputBox.classList.remove('input__shadow');

  addListenerToSearchIcon();
  addRemoveSearchButton()
}

function addListenerToSearchIcon() {
  searchIcon.addEventListener('click', searchMovies);
  searchIcon.style.cursor = 'pointer';
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
  searchInput.focus();
  inputBox.classList.add('input__shadow');
}

function originalTitle() {
  if (searchInput.value !== '') {
    searchIcon.classList.add('moveIcon');
    titleSearch.classList.add('show-o');
    titleSearch.classList.remove('hide-o');
    removeSearchBtn.classList.remove('hidden');
  } else {
    searchIcon.style.cursor = '';
    searchIcon.classList.remove('moveIcon');
    titleSearch.classList.remove('show-o');
    titleSearch.classList.add('hide-o');
    removeSearchBtn.classList.add('hidden');
  }
}

function setPointerInInput() {
  searchInput.focus();
  moveSearchIcon()
}

function enableSearchButton() {
  searchButton.removeAttribute('disabled', 'disabled')
}

function disableValidationMessage(event) {
  event.preventDefault() 
}

function showFavList() {
  if(screen.width < 768) {
    if( favListSection.style.display !== 'inherit') {
      favListSection.style.display = 'inherit';
    } else {
      favListSection.style.display = 'none';
    }
  } else {
    favListSection.style.display = 'block';
  }
}