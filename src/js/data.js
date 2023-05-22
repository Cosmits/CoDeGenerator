export const refs = {
  form: document.getElementById('.feedback-form'),
  
  formH1: document.querySelector('.feedback-form h1'),
  formInput: document.getElementById('dataStr'),
 
  formSelect: document.querySelector('.feedback-form select'),
  formCombinations: document.getElementById('combinations'),
  
  formButton: document.querySelector('.feedback-form button'),
  formTextarea: document.querySelector('.feedback-form textarea'),
}

export const data = {
  dataStr: "",
  sizeStr: 0,
  //arrStr: [],
  
  maxN: 0,
  currentN: 0,
  
  maxY: 0,
  currentY: 0,
};


// for Local Storage
export const KEY_STORE_INPUT = 'CoDeGenerator-form-input';
export const KEY_STORE_SELECT = 'CoDeGenerator-form-select';
export const KEY_STORE_HISTORY = 'CoDeGenerator-form-history';

