function findSmallest(num1,num2){
  let a = Math.min(num1, num2);
  let b = Math.max(num1, num2);

  for(let i = b; i <= a * b; i+=b){
    //checks if i is a multiple of a 
    if(i % a ===0){
      // returns i if it is a match/multiple of a
      return i;
    }
  }
}
function smallestCommons(arr) {
  let x = Math.min(...arr);
  let y = Math.max(...arr);
  let least = 1;

  for(let j = x; j <= y; j++){
    least = findSmallest(least, j);
  }
  return least;
  
}


console.log(smallestCommons([1,5]));
