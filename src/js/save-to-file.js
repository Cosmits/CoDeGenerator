import { data } from "./data";

export function saveToFile(resultArray, count) {
  const filename = `${data.arrStr.join('-')}__${data.currentY}-out-of-${data.currentN}.txt`;

  let value = '';
  for (let i = 0; i < count; i++) {
    value += resultArray[i].join(' ');
    if (i < count - 1) value += '\n';
  }

  const blob = new Blob([value], { type: "text/plain" });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = fileUrl;
  link.click();
}