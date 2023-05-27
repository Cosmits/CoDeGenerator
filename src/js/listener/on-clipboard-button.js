import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../data";

export default function onClipboardButton(event) {


  Notify.info(`Copied to clipboard!`);
  refs.svgCopyIcon.classList.add('hide');
  refs.svgCopyDone.classList.remove('hide');

  // Get the text field
  const copyText = refs.formTextarea;

  // // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  setTimeout(() => {
    refs.svgCopyIcon.classList.remove('hide');
    refs.svgCopyDone.classList.add('hide');
  }, 1000);

}
