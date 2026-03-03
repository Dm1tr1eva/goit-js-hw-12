// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
let query = '';

form.addEventListener('submit', e => {
  e.preventDefault();

  query = e.target.elements['search-text'].value.trim();

  if (query === '') {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (!images.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: ' #fafafb',
          iconColor: '#fafafb',
        });

        return;
      }
      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong',
      });
    })
    .finally(() => {
      hideLoader();
    });

  return;
});
