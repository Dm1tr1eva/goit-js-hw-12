// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');
const lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(elem => {
      return `<li class="gallery-item">
    <a class="gallery-link" href="${elem.largeImageURL}">
      <img
        class="gallery-image"
        src="${elem.webformatURL}"
        alt="${elem.tags}"
        width="360"
        height="200"
      />
    </a>
    <ul class="info-list">
      <li class="info-item"><h3 class="info-title">Likes</h3><p class="info-text">${elem.likes}</p></li>
      <li class="info-item"><h3 class="info-title">Views</h3><p class="info-text">${elem.views}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3><p class="info-text">${elem.comments}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3><p class="info-text">${elem.downloads}</p></li>
    </ul>
  </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  btnLoadMore.style.display = 'block';
}

export function hideLoadMoreButton() {
  btnLoadMore.style.display = 'none';
}
