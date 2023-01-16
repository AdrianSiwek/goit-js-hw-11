export {scroll, scrollOnTop, scrollLoading};

    //page scrolling up
const btnUp = document.querySelector('.btnUp');

// window.addEventListener('scroll', scroll);
btnUp.addEventListener('click', scrollOnTop);

const scroll = () => {
    const scrolled = window.pageYOffset;
    const cordination = document.documentElement.clientHeight;

    if (scrolled > cordination) {
        btnUp.style.display = 'block';
    } else {
        btnUp.style.display = 'none';
    }
    
}

const scrollOnTop = () => {
    // this changes the scrolling behavior to "smooth"
window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollLoading = () => {
    const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
}

