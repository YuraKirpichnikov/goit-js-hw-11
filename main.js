import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './src/js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './src/js/render-functions.js';

const form = document.querySelector('#search-form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search word first.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while fetching images. Please try again.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}
