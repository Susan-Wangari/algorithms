function uniteUnique(arr) {
  //joint array
  let jointArr = [];
  //use the arrays object
  //reduce used to join the two arrays together
  let allArrays = Array.from(arguments).reduce((arr1, arr2) => arr1.concat(arr2));
  allArrays.forEach(function(elem) {
    //if the element is not contained, add it to the array
    if(!jointArr.includes(elem)){
      jointArr.push(elem);
    }
  });
  return jointArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
