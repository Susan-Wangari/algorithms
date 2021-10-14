function sumFibs(num) {
  let a = 1;
  let b = 1;
  let sum = 1;

while(b <= num) {
  //only odd numbers should be returned
  if(b % 2 == 1){
  //adding a and b here returns the fibonnaci added twice
  sum += b;
   }
  //create a temporary variable to store the value of b
  let temp = b;
  b = a + b;
  //this updates the fibonnaci series to the current sum
  a = temp;
}
  return sum;
}

console.log(sumFibs(4));
