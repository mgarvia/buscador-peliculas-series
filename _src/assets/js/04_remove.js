'use strict'

function removeAllFavourites() {
  removeStyleDisplayed()
  removeFavList()
  removeFromLocal();
  favMessage.classList.remove('hidden')
}

function removeStyleDisplayed() {
  let favItemsArr = document.querySelectorAll('.heart__favourite');
  for (let item of favItemsArr) {
    console.log(item)
    removeFavStyle(item)
  }
}

function removeFavList() {
  favouriteList.innerHTML = '';
  removeFavButton.classList.add('hidden');
}