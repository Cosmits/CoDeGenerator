![GitHub top language](https://img.shields.io/github/languages/top/Cosmits/CoDeGenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/Cosmits/CoDeGenerator) ![GitHub Release Date](https://img.shields.io/github/release-date/Cosmits/CoDeGenerator) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Cosmits/CoDeGenerator) ![GitHub repo size](https://img.shields.io/github/repo-size/Cosmits/CoDeGenerator)
# Критерії приймання

Потрібно перемішати та видати 'N' результатів та кількості 'Y'. Слова не можуть повторюватись в варіантах пребору. 

### Тобто:
  * Можливість вказувати генеруєму кількість слів
  * Можливість вказувати кількість сгенерованих рядків

Даний набір слів чи елементів [A, B, C, D].
### Виключити не правильні резльтати:
  1. False => [A, A, A] 
  2. False => [A, B, A]

### Виводити правильні резльтати:
  1. True => [C, A, D]
  2. True => [B, A, C]
  3. True => [A, B, C]
### Нюанси: 
  1. Додати кнопку "Copy to clipboard".
  2. Нумерація рядків при виведенні результатів.
  3. Додати можливіть зберігати результати в файл.
  4. Якщо слів більше 7, то зберігати результати тільки в файл. (*Optimization rendering)

## Використані алгоритми   
* [Перестановка](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/permutations) (з повтореннями та без)
* [Комбінації](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations) (з повтореннями та без)

### Stack technology:

<p align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
<a href="https://parceljs.org/" target="_blank" rel="noreferrer"> 
<img class="parcel" src="https://parceljs.org/parcel.fb905a63.png" srcset="https://parceljs.org/parcel@2x.1a67634b.png 2x" width="40" ></a> 
</p> 