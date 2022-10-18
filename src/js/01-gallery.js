import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryId = document.querySelector("gallery");

const createImgEl = 
// galleryItems.reduce(
//     (acc, item) =>
//       acc +
//       `<a class="gallery__item" href="${item.original}">
//     <img class="gallery__image" src="${item.preview}" 
//     alt="${item.description}" />
//   </a>`,
//     ''
//   );

  // and .MAP
galleryItems.map(({ preview, original, description})  => 

`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

galleryId.insertAdjacentHTML("beforeend", createImgEl);


// ============ Modal win

// var lightbox = 
new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img",
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});

