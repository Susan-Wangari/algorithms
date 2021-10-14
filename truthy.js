function truthCheck(collection, pre) {
//use every instead of for loop
//checks if it has the said properties
//boolean returns true
return collection.every(elem => elem.hasOwnProperty(pre) && Boolean(elem[pre]));
   if(truthCheck.pre){

   }
 
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
