function frankenSplice(arr1, arr2, n) {
 let word = arr2.slice();
 for(let i = 0; i < arr1.length; i++) {
   word.splice(n, 0, arr1[i]);
   n++;
 }
return word;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);
