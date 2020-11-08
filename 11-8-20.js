/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
  //split the strings into arrays
  let strSplit = str.split("");
  let endingSplit = ending.split("");
  //calculate the difference between the two
  let diff = str.length - ending.length;
  //remove the first item in the original array until they are the same length
  for(let i = 0; i < diff; i++){
    strSplit.shift();
  }
  //join then back into strings
  const newStr = strSplit.join();
  const newEnd = endingSplit.join();
  //check if the new strings are equal
if(newStr == newEnd){
    return true
  }
  else{
    return false
  }
  
}

//OR (wow this is much easier) - return if it is true/false if the str ends with the ending
function solution(str, ending){
  return str.endsWith(ending);
  }
