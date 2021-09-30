function spinalCase(str) {
  //use a-z for case and () for groups
  //$1_$2 for adding underscore
  let newStr = str.replace(/([a-z])([A-Z])/g,
  '$1_$2');
 
  //(/s) to escape white space
  //_ for underscores
  //+ where there is more than one instance of the whitespace or underscore
  //g is for global value
  const reg = /[\s_]+/g;
  return newStr.split(reg).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
