import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { data, refs } from "../data";

export default function onClipboardButton(event) {

  // Get the text field
  const copyText = refs.formTextarea;

  console.dir(copyText);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, data.currentN); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
    .then(() => {
      Notify.info(`Copied to clipboard!`);
    })
    .catch(err => {
      Notify.failure(`Error in copying text: ${err}`);
    });

  refs.svgCopyIcon.classList.add('hide');
  refs.svgCopyDone.classList.remove('hide');
  
  // UnSelect the text field
  const selection = window.getSelection();
  selection.removeAllRanges();

  setTimeout(() => {
    refs.svgCopyIcon.classList.remove('hide');
    refs.svgCopyDone.classList.add('hide');
  }, 1000);

}
