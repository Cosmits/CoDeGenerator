import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs, data } from '../data';
import { renderCombinations, renderH1, renderSelect, renderStatusChecker } from '../renders';


//==========================================
function findDuplicateEl(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return duplicates;
}
//==========================================
function deleteDuplicateEl(arr) {
  let uniqueArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return uniqueArr;
}
//==========================================
export default function onInputForm(event) {
  event.preventDefault();

  data.dataStr = event.target.value.trim().replace(/\s+/g, " ");
  data.arrStr = data.dataStr.split(" ");

  if (data.arrStr.length < 2) return false;

  const duplicateArr = findDuplicateEl(data.arrStr);
  if (!!duplicateArr.length) {

    Notify.failure(`Duplicate:  ${duplicateArr.join(' ') }`);
    //refs.formH1.textContent = `Duplicate ${duplicateArr} world(s)`;
    //refs.formButton.disabled = true;
    //return false;

    data.arrStr = deleteDuplicateEl(data.arrStr);
    data.dataStr = data.arrStr.join(' ');
    event.target.value = data.dataStr;
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

  if (data.arrStr.length > 7) {
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