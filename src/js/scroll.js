export {scrollLoading, };

const btnUp = document.querySelector('.btnUp');

const scrollLoading = (multiplayer) => {
    const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * multiplayer,
  behavior: "smooth",
});
}

