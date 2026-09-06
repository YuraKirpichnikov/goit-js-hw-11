import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.85,
});

/**
 * Builds and appends gallery card markup for the given images,
 * then refreshes the SimpleLightbox instance so new items are clickable.
 * @param {Array<Object>} images - array of image hits from the Pixabay API
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item"><b>Likes</b>${likes}</li>
          <li class="info-item"><b>Views</b>${views}</li>
          <li class="info-item"><b>Comments</b>${comments}</li>
          <li class="info-item"><b>Downloads</b>${downloads}</li>
        </ul>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Clears all cards currently in the gallery container.
 */
export function clearGallery() {
  gallery.innerHTML = '';
}

/**
 * Reveals the loading indicator.
 */
export function showLoader() {
  loader.classList.remove('is-hidden');
}

/**
 * Hides the loading indicator.
 */
export function hideLoader() {
  loader.classList.add('is-hidden');
}
