function fearNotLetter(str) {
  let start = str.charCodeAt(0);
  //the last character of the string
  let finish = str.charCodeAt(str.length -1);
  //iterate through the array
  for(let i = start; i < finish; i++) {
    //returns the characters as alphabets
    //i is for the letter at that iteration
    let codeLetter = String.fromCharCode(i);
    //starts from the letter at zero index
    let strLetter = str[i - start];
    if(codeLetter !== strLetter) {
      return codeLetter; //returns the missing letter
    }
}
}

fearNotLetter("abce");
