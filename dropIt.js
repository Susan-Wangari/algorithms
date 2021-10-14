function dropElements(arr, func) {
//returns true
  while(arr.length > 0 && !func(arr[0])){
    //remove the first element from the array
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
