import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs, data } from './data';
import { permutateWithoutRepetitions, combineWithoutRepetitions } from './mathFunc';
import { createNumerator } from './textareaNumerator';


function renderTextarea(resultArray, count) {
  let value = '';


  for (let i = 0; i < count; i++) {

    console.log("resultArray:", resultArray[i])

    value += resultArray[i].join(' ');
    if (i < count - 1) value += '\n';
  }

  refs.formTextarea.value = value;
  createNumerator();
  Notify.success(`Generate ${count} combinations`);
}

//===========================================
export default function onSubmitForm(event) {
  event.preventDefault();

  //Quantity 'Y'
  const YYY = Number(refs.formSelect.value);


  //Combinations 'N'
  const NNN = Number(refs.formCombinations.value);
  let resultArray = [];

  if (data.sizeStr === YYY) {
    resultArray = permutateWithoutRepetitions(data.arrStr);
  } else {
    resultArray = combineWithoutRepetitions(data.arrStr, YYY);
  }

  const count = NNN > data.arrStr.length ? data.arrStr.length : NNN;
  renderTextarea(resultArray, count);
}
