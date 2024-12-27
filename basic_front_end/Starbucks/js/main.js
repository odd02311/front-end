const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  // Logic
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  // Logic
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});