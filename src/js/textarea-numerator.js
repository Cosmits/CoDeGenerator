
import debounce from 'lodash.debounce';

// Numerator textarea
export function createNumerator() {

  const textarea = document.querySelector("textarea");
  const lineNumber = document.querySelector(".line-numbers");

  textarea.addEventListener("input", debounce(updateLineNumbers,50));
  updateLineNumbers();

  function updateLineNumbers() {
    const lines = textarea.value.split("\n");
    lineNumber.innerHTML = "";
    for (let i = 0; i < lines.length; i++) {
      var line = document.createElement("div");
      line.className = "line-number";
      line.textContent = "";  //i + 1;
      lineNumber.appendChild(line);
      autosize(textarea);
    }
  }
}

// autosize textarea
function autosize(textarea) {
  var el = textarea;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';

    el.style.cssText = 'height: ' + Number(el.scrollHeight + 7) + 'px';
  }, 0);
}