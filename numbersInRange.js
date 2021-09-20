function sumAll(arr) {
  let maxNumbers = Math.max(arr[0], arr[1]);
  let minNumbers = Math.min(arr[0],arr[1]);

  let total = 0;
  for(let i = minNumbers; i <= maxNumbers; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);
