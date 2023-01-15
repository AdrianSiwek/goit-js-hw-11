import SimpleLightbox from "simplelightbox";
import {scrollLoading} from "./js/scroll";
import {createCard} from "./js/gallery";
import Notiflix from 'notiflix';
import { fetchPixabay } from "./js/fetchPixabay";


const btnSearch = document.querySelector(".btnSearch");
const inputSearch = document.querySelector(".search-form input");
const btnDown = document.querySelector('.btn-down');
const gallery = document.querySelector(".gallery");

let lightbox;
let valueSearch = '';
let numberPage;
let perPage = 40;
btnDown.style.display = 'none';

const lookPicture = () => {
    event.preventDefault();

    btnDown.style.display = 'none';
    valueSearch = formSearch.value.trim();

    fetchPixabay(valueSearch, numberPage, perPage)
        .then(image => {
            Loading.circle();
            renderCard(image.hits);
        
            if (numberPage !== 1) {
                scrollLoading(2.45);
            }
            lightbox = new SimpleLightbox('.gallery a').refresh();
            btnDown.style.display = 'block';

            const totalPages = Math.ceil(image.totalHits / perPage);

      if (numberPage === totalPages) {
        btnDown.style.display = 'none';
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        return;
      }
      console.log(totalPages);
    })
    .catch(error => console.error(error))
    .finally(() => {
      Loading.remove();
        })
}