// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  (galleryItem) => `<a class="gallery__item" href = ${galleryItem.original}>
  <img class="gallery__image" src = '${galleryItem.preview}' alt = '${galleryItem.description}'
  />
</a>`
);
gallery.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
