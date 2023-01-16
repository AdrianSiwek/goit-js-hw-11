

export { onScroll, onToTopBtn, scrollLoading };

const toTopBtn = document.querySelector('.btn-up');

window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTopBtn.style.display = 'block';
  }
  if (scrolled < coords) {
    toTopBtn.style.display = 'none';
  }
}

function onToTopBtn() {
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