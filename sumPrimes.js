function isPrime(x){
  if (x == 2){
    return true;
  }

   for(let i =2; i < x; i++){
    //should only divide by 1 and itself
    if(x % i == 0) {
      return false;
    }
  }
    return true;
}
function sumPrimes(num) {
 let sum = 0;
 for(let i=2; i <= num; i++){
   if(isPrime(i)){
     sum += i;
   }
 }
  return sum;
  
}

sumPrimes(10);
