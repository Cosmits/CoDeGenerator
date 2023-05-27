export const refs = {
  form: document.querySelector('.feedback-form'),

  formH1: document.querySelector('.feedback-form h1'),
  formInput: document.getElementById('dataStr'),

  formSelect: document.querySelector('.feedback-form select'),
  formCombinations: document.getElementById('combinations'),

  formButton: document.querySelector('.feedback-form button'),
  
  checkerSaveToFile: document.querySelector('.save-to-file'),

  formHistoryTitle: document.querySelector('.title-history'),
  
  clipboardButton: document.querySelector('.ClipboardButton'),
  svgCopyIcon: document.querySelector('.copy-icon'),
  svgCopyDone: document.querySelector('.copy-done'),

  formTextarea: document.querySelector('.feedback-form textarea'),
}

export const data = {
  dataStr: "",
  //arrStr: [],

  maxY: 0,
  currentY: 0,

  maxN: 0,
  currentN: 0,

  saveToFile: false,
};

// for Local Storage
export const KEY_STORE_INPUT = 'CoDeGenerator-form-input';
export const KEY_STORE_SELECT = 'CoDeGenerator-form-select';
export const KEY_STORE_HISTORY = 'CoDeGenerator-form-history';