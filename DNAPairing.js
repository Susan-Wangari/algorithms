function pairElement(str) {
  //create an object to incorporate all pairings
  const pairings = {
    "A": "T",
    "T":"A",
    "C":"G",
    "G": "C"
  };

  return str.split("").map(elem => [elem, pairings[elem]]); //returns, the element and its pair in an array
}

pairElement("GCG");
