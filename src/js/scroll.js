export { scroll, scrollTop, scrollLoading };

const toTopBtn = document.querySelector('.btn-up');

window.addEventListener('scroll', scroll);
toTopBtn.addEventListener('click', scrollTop);

function scroll() {
  const scrolled = window.pageYOffset;
  const coordination = document.documentElement.clientHeight;

  if (scrolled > coordination) {
    toTopBtn.style.display = 'block';
  }
  if (scrolled < coordination) {
    toTopBtn.style.display = 'none';
  }
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollLoading(multiplier) {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * multiplier,
    behavior: 'smooth',
  });
}