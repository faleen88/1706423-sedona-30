const searchLink = document.querySelector('.button-popup');
const searchPopup = document.querySelector('.form-popup');
const searchForm = searchPopup.querySelector('.search-form');
const searchDateArrival = searchPopup.querySelector('.date-arrival-input');
const searchDateDeparture = searchPopup.querySelector('.date-of-departure-input');

searchLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle('search-show');
  searchPopup.classList.remove('search-error');
});

searchForm.addEventListener('submit', function (evt) {
  if (!searchDateArrival.value || !searchDateDeparture.value) {
    evt.preventDefault();
    searchPopup.classList.remove("search-error");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add('search-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains('search-show')) {
      evt.preventDefault();
      searchPopup.classList.remove('search-show');
      searchPopup.classList.remove('search-error');
    }
  }
});
