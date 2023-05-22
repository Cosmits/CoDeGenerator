
//================================================================
export function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

//================================================================
export function getCombinations(array, k = 2) {
  const result = [];
  const f = function (prefix, array) {
    for (let i = 0; i < array.length; i++) {
      result.push(prefix.concat(array[i]));
      f(prefix.concat(array[i]), array.slice(i + 1));
    }
  }
  f([], array);
  return result.filter(x => x.length === k);
}

//================================================================
export function getCombinationsCount(array, k = 2) {
  const n = array.length;
  let result = 1;
  for (let i = n; i > n - k; i--) {
    result *= i;
  }
  for (let i = k; i > 1; i--) {
    result /= i;
  }
  return result;
}
