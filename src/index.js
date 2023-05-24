import './css/styles.css';
import debounce from 'lodash.debounce';

import { createNumerator } from './js/textareaNumerator'
import { refs } from './js/data';
import onInputForm  from './js/onInputForm';
import onSubmitForm from './js/onSubmitForm';
import onSelectForm from './js/onSelectForm';

createNumerator();

//* Listener
refs.formInput.addEventListener("input", debounce(onInputForm, 500));
refs.formSelect.addEventListener("change", debounce(onSelectForm,100));

refs.form.addEventListener("submit", onSubmitForm);
