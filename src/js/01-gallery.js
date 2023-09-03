import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = `none`;

galleryItems.forEach(picture => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<li><a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a></li>`
  );
});

gallery.childNodes.forEach(item => {
  item.firstChild.style.height = '100%';
  item.firstChild.style.display = 'block';
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
