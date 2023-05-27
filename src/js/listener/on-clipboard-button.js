import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { data, refs } from "../data";

export default function onClipboardButton(event) {


  Notify.info(`Copied to clipboard!`);
  refs.svgCopyIcon.classList.add('hide');
  refs.svgCopyDone.classList.remove('hide');

  // Get the text field
  const copyText = refs.formTextarea;

  console.dir(copyText);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, data.currentN); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // UnSelect the text field
  const selection = window.getSelection();
  selection.removeAllRanges();

  setTimeout(() => {
    refs.svgCopyIcon.classList.remove('hide');
    refs.svgCopyDone.classList.add('hide');

    // copyText.removeAllRanges();
    // copyText.empty();

  }, 1000);

}
