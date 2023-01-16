import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export const createCard = (galleryCard) => {
    const newImages = galleryCard
        .map(image=>
            `<div class="photo-card">
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
                <div class="info">
                    <p class="info-item"><b>Likes</b>${Image.likes}</p>
                    <p class="info-item"><b>Views</b>${Image.views}</p>
                    <p class="info-item"><b>Comments</b>${Image.comments}</p>
                    <p class="info-item"><b>Downloads</b>${Image.dowloads}</p>
                </div>
            </div>`
        )
        .join('');
    
    gallery.insertAdjacentHTML("beforeend", newImages)
}