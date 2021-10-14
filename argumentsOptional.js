function addTogether() {
 let args = Array.from(arguments);
 //If either argument isn't a valid number, return undefined.
if(args.some(elem => typeof elem !== 'number')){
  return undefined;
}
 else if(args.length == 1) {
   return x => addTogether(args[0], x);
 } else {
   //adds the two arguments
   return args[0] + args[1];
 }
}

console.log(addTogether(2,3));
