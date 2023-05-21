
import './css/styles.css';
import { createNumerator } from './textareaNumerator'

createNumerator();

// import { anySearchParam, refs } from './models/data';
// import onSubmitForm from './services/onSubmitForm'
// import getPagesLoader from './services/getPagesLoader'

// import renderSearchBtn from './markups/renderSearchBtn';
// import renderGalleryTitle from './markups/renderGalleryTitle';

// //* Render
// renderSearchBtn(refs.SearchButton);
// renderGalleryTitle(refs);

// //* Listener
// refs.searchForm.addEventListener("submit", onSubmitForm);

// //! Infinite scroll - intersectionObserver
// const optionsObserver = {
//   rootMargin: '500px',
//   threshold: 0.1,
// };

// const callbackObserver = entries => {
//   if (entries[0].isIntersecting && !!anySearchParam.currentQuery && !anySearchParam.isDone) {
//     getPagesLoader();
//   }
// };

// const intersectionObserver = new IntersectionObserver(callbackObserver, optionsObserver);
// // start observing
// intersectionObserver.observe(refs.titleH1TheEnd);

// //* Initialize SimpleLightbox
// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   animationSpeed: 250,
// });

// refs.lightbox = lightbox;