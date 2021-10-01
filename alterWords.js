function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let cluster = '';

  for(let i =0; i < str.length; i++) {
    if(vowels.some(v => v === str[i])) {
      break; //if the first letter is a vowel, it breaks
    } else {
      cluster += str[i]; 
    }
  }

if(cluster === '') {
  //if a vowel, add way
  return str + 'way';
} else {
  //slice removes the first letter of a word
  //adds ay for a consonant
  return str.slice(cluster.length,) + cluster + 'ay';
}
};

translatePigLatin("consonant");
