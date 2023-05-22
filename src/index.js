import './css/styles.css';
import debounce from 'lodash.debounce';

import { createNumerator } from './js/textareaNumerator'
import { refs } from './js/data';
import onInputForm  from './js/onInputForm';
import onSubmitForm from './js/onSubmitForm';

createNumerator();

//* Listener
refs.formInput.addEventListener("input", debounce(onInputForm, 500));
refs.formButton.addEventListener("submit", onSubmitForm);
