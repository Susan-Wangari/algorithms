function reverseString(str) {
  var splitstr = str.split("");
  var reversedString = splitstr.reverse("");
  var joinedstring = reversedString.join("");
  return joinedstring;
}

reverseString("hello");
