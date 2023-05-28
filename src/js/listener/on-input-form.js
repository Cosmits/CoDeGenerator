import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs, data } from '../data';
import { renderCombinations, renderH1, renderSelect, renderStatusChecker } from '../renders';


//==========================================
function findDuplicateEl(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return duplicates.length;
}

//==========================================
export default function onInputForm(event) {
  event.preventDefault();

  data.dataStr = event.target.value.trim().replace(/\s+/g, " ");
  data.arrStr = data.dataStr.split(" ");

  if (data.arrStr.length < 2) return false;

  const duplicateCount = findDuplicateEl(data.arrStr);
  if (!!duplicateCount) {

    refs.formH1.textContent = `Duplicate ${duplicateCount} world(s)`;
    Notify.failure(refs.formH1.textContent);
    refs.formButton.disabled = true;

    return false;
  }

  refs.formButton.disabled = false;
  refs.formCombinations.disabled = false;
  renderH1(data.arrStr.length);
  renderSelect(data.arrStr.length);
  renderCombinations(data.arrStr, data.arrStr.length);

  //Quantity 'Y'
  data.currentY = Number(refs.formSelect.value);
  data.maxY = data.currentY;

  //Combinations 'N'
  data.currentN = Number(refs.formCombinations.value);
  data.maxN = data.currentN;

  if (data.arrStr.length > 4) {
    data.saveToFile = true;
    console.dir(refs.checkerSaveToFile);
    refs.checkerSaveToFile.children[0].checked = true;
    refs.checkerSaveToFile.children[0].disabled = true;
  } else {
    refs.checkerSaveToFile.children[0].disabled = false;
  }

  renderStatusChecker();

  return true;
}