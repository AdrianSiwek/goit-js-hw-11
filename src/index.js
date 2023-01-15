import SimpleLightbox from "simplelightbox";
import {scrollLoading} from "./js/scroll";
import {createCard} from "./js/gallery";
import Notiflix from 'notiflix';
import { fetchPixabay } from "./js/fetchPixabay";


const btnSearch = document.querySelector(".btnSearch");
const inputSearch = document.querySelector(".search-form input");
const btnDown = document.querySelector('.btn-down');
const gallery = document.querySelector(".gallery");

