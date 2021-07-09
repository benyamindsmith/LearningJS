function caseInSwitch(val) {
  var answer = "";

  // The example
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    // set default in case statement
    default:
      answer = "Function only works with values {1,2,3,4}";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(6));

// Another case statement function accepting using multiple values

function caseHighLow(val) {
  var answer = "";

  switch (val) {
    // If there is no break mentioned the case statement will evaluate at the next case statement.
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Medium";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Only works for values {1,2,3,4,5,6,7,8,9}";
  }
  return answer;
}

console.log(caseHighLow(3));
console.log(caseHighLow(4));
console.log(caseHighLow(6));
console.log(caseHighLow(2));
console.log(caseHighLow(9));
console.log(caseHighLow(21));
