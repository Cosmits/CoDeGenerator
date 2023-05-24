import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs, data } from './data';
import { getCombinationsCount } from './mathFunc';

//==========================================
function findDuplicateEl(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return duplicates.length;
}

//==========================================
function renderSelect(count) {
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
function renderH1(sizeStr) { 
  refs.formH1.textContent = ` ${sizeStr} worlds to generate variants`;
}

export function renderCombinations(arrStr, sizeStr) { 
  const maxCombinationsCount = getCombinationsCount(arrStr, sizeStr);
  refs.formCombinations.value = maxCombinationsCount;
  refs.formCombinations.placeholder = `1 ... ${maxCombinationsCount}`;
  refs.formCombinations.min = `1`;
  refs.formCombinations.max = `${maxCombinationsCount}`;
}

//==========================================
export default function onInputForm(event) {

  event.preventDefault();

  data.dataStr = event.target.value.trim().replace(/\s+/g, " ");
  data.sizeStr = data.dataStr.split(" ").length;
  data.arrStr = data.dataStr.split(" ");

  if (data.sizeStr < 2) return false;

  const duplicateCount = findDuplicateEl(data.arrStr);
  if (!!duplicateCount) {

    refs.formH1.textContent = `Duplicate ${duplicateCount} world(s)`;
    Notify.failure(refs.formH1.textContent);
    refs.formButton.disabled = true;

    return false;
  }

  refs.formButton.disabled = false;
  refs.formCombinations.disabled = false;
  
  renderH1(data.sizeStr);
  renderSelect(data.sizeStr);
  renderCombinations(data.arrStr, data.sizeStr);
  
  return true;
}