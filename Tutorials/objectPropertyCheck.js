// Setup
// Verbatim from the freecodecamp video

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

// Function to check if object has property

function checkObj(theObj, checkProp) {
  if (theObj.hasOwnProperty(checkProp)) {
    return theObj[checkProp];
  } else {
    return "property does not exist";
  }
}

console.log(checkObj(myObj, "bed"));
console.log(checkObj(myObj, "table"));
