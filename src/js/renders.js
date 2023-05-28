import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs, data } from './data';
import { getCombinationsWithoutRepetition } from './math-funcions';
import { createNumerator } from './textarea-numerator';

//==========================================
export function renderSelect(count) {
  if (count < 2) refs.formSelect.disabled = true;

  let markUp = "";
  for (let i = 2; i <= count; i++) {
    // console.log(i);
    const selected = i === count ? "selected" : "";
    markUp = markUp + `<option value="${i}" ${selected}>${i}</option>`;
  }

  refs.formSelect.innerHTML = markUp;
  refs.formSelect.disabled = false;
}

//==========================================
export function renderH1(sizeStr) {
  refs.formH1.textContent = ` ${sizeStr} worlds to generate variants`;
}

//==========================================
export function renderCombinations(arrStr, sizeStr) {
  const maxCombinationsCount = getCombinationsWithoutRepetition(arrStr.length, sizeStr);
  refs.formCombinations.value = maxCombinationsCount;
  refs.formCombinations.placeholder = `1 ... ${maxCombinationsCount}`;
  refs.formCombinations.min = `1`;
  refs.formCombinations.max = `${maxCombinationsCount}`;

  data.currentN = maxCombinationsCount;
}

//==========================================
export function renderTextarea(resultArray, count) {

  let value = '';
  
  for (let i = 0; i < count; i++) {
    value += resultArray[i].join(' ');
    if (i < count - 1) value += '\n';
  }

  refs.formTextarea.value = value;

  createNumerator();
  Notify.success(`Generate ${count} combinations`);
}

//==========================================
export function renderStatusChecker() {
  if (data.saveToFile) {
    document.querySelector('.line-numbers').classList.add('hide');

    refs.clipboardButton.childNodes[1].classList.add('hide');
    refs.svgCopyIcon.classList.add('hide');

    refs.formTextarea.classList.add('hide');

    refs.formButton.textContent = 'Save to file *.txt';
    const filename = `Generate__${data.currentY}-out-of-${data.currentN}.txt`;
    refs.formHistoryTitle.textContent = filename;

  } else {
    document.querySelector('.line-numbers').classList.remove('hide');

    refs.clipboardButton.childNodes[1].classList.remove('hide');
    refs.svgCopyIcon.classList.remove('hide');

    refs.formTextarea.classList.remove('hide');

    refs.formButton.textContent = 'Generate';
    refs.formHistoryTitle.textContent = 'History';
  }
}