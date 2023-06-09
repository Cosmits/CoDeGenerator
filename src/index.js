import './css/styles.css';
import debounce from 'lodash.debounce';

import { createNumerator } from './js/textarea-numerator'
import { refs } from './js/data';
import onInputForm from './js/listener/on-input-form';
import onSubmitForm from './js/listener/on-submit-form';
import onSelectForm from './js/listener/on-select-form';
import onCombinationForm from './js/listener/on-combination-form';
import onClipboardButton from './js/listener/on-clipboard-button';
import { onCheckerSaveToFile } from './js/listener/on-checker-save-to-file';


createNumerator();

//* Listener
refs.formInput.addEventListener("input", debounce(onInputForm, 500));

refs.formSelect.addEventListener("change", debounce(onSelectForm, 100));
refs.formCombinations.addEventListener("input", debounce(onCombinationForm, 500));

refs.checkerSaveToFile.addEventListener("change", onCheckerSaveToFile);
refs.clipboardButton.addEventListener("click", onClipboardButton);

refs.form.addEventListener("submit", onSubmitForm);
