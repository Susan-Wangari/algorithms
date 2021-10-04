 function myReplace(str, before, after) {
   if(before[0] === before[0].toUpperCase()) {
     after = after[0].toUpperCase() + after.slice(1,);
   } else {
     after = after[0].toLowerCase() + after.slice(1,); //slices from 1 till the end
   }
  return str.replace(before, after); 
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
