
import { data } from '../data';
import { permutateWithoutRepetitions, combineWithoutRepetitions } from '../math-funcions';
import { renderTextarea } from '../renders';
import { saveToFile } from '../save-to-file';

function concatTwolevelArray(a,b) { 
  return a.concat(b).filter((item, index) => {
    return a.concat(b).indexOf(item) === index;
  });
}

//===========================================
export default function onSubmitForm(event) {
  event.preventDefault();

  let resultArray = [];

  if (data.arrStr.length === data.currentY) {
    resultArray = permutateWithoutRepetitions(data.arrStr);
  } else {
    const tempArray = combineWithoutRepetitions(data.arrStr, data.currentY);
    for (let index = 0; index < tempArray.length; index++) {
      resultArray = concatTwolevelArray(resultArray, permutateWithoutRepetitions(tempArray[index]))
    }
  }

  if (data.saveToFile) { 
    saveToFile(resultArray, data.currentN);
  } else { 
    renderTextarea(resultArray, data.currentN);
  }
 
}
