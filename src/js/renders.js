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
  console.log(data);
  console.log("🚀 ~ file: renders.js:38 ~ renderTextarea ~ count:", count)
  console.log(resultArray);

  for (let i = 0; i < count; i++) {

    // console.log("resultArray:", resultArray[i])

    value += resultArray[i].join(' ');
    if (i < count - 1) value += '\n';
  }

  refs.formTextarea.value = value;

  createNumerator();
  Notify.success(`Generate ${count} combinations`);
}