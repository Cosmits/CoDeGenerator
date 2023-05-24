
import { data } from '../data';
import { permutateWithoutRepetitions, combineWithoutRepetitions } from '../math-funcions';
import { renderTextarea } from '../renders';

//===========================================
export default function onSubmitForm(event) {
  event.preventDefault();

  let resultArray = [];

  if (data.arrStr.length === data.currentY) {
    resultArray = permutateWithoutRepetitions(data.arrStr);
  } else {
    resultArray = combineWithoutRepetitions(data.arrStr, data.currentY);
  }

  renderTextarea(resultArray, data.currentN);
}
