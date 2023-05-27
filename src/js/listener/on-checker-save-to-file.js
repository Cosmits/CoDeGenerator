import { data, refs } from "../data";

export default function onCheckerSaveToFile(event) {

  data.saveToFile = event.target.checked;

  if (event.target.checked) {
    document.querySelector('.line-numbers').classList.add('hide');
    
    refs.clipboardButton.childNodes[1].classList.add('hide');
    refs.svgCopyIcon.classList.add('hide');

    refs.formTextarea.classList.add('hide');

    refs.formButton.textContent = 'Save to file *.txt';

  } else {
    document.querySelector('.line-numbers').classList.remove('hide');
    
    refs.clipboardButton.childNodes[1].classList.remove('hide');
    refs.svgCopyIcon.classList.remove('hide');

    refs.formTextarea.classList.remove('hide');

    refs.formButton.textContent = 'Generate';
  }


}
