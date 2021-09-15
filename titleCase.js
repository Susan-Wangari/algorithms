function titleCase(str) {
  //split the sentence
  //turn it to lowercase
let words = str.toLowerCase().split(" ");
for(let i=0; i<words.length; i++) {
  //turn the first word to uppercase
  //slice to return from the second letter of the sentence
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
  //join to return a sentence
return words.join(" ");
}

titleCase("I'm a little tea pot");
