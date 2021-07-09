function isThisTrue(trueFalse) {
  if (trueFalse) {
    return "This is True";
  } else {
    return "This is False";
  }
}

console.log(isThisTrue(true));
console.log(isThisTrue(false));

// Note, ending with else is not mandatory
// you can equivalently write

function ifThisIsTrue(falseTrue) {
  if (falseTrue) {
    return "Yes, this is True";
  } // No need for a final else operator
  return "No, this is False";
}

console.log(ifThisIsTrue(true));
console.log(ifThisIsTrue(false));
