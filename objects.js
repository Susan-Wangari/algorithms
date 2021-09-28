function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
let props = Object.keys(source);
arr = collection.filter(obj =>
props.every(prop =>
obj.hasOwnProperty(prop) && obj[prop] === source[prop]));

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
