function destroyer(arr) {
  let rest;
  [,...rest] = arguments;
  return arr.filter(elem => !rest.includes(elem));
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
