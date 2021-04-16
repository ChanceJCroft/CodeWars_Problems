//PROBLEM 1

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case*/

function isIsogram(str){
    let newStr = str.toLowerCase();
    for(let i = 0; i < newStr.length; i++){
      if(newStr.indexOf(newStr[i]) !== newStr.lastIndexOf(newStr[i])){
        return false;
      }
    }
    
    return true;
  }


//PROBLEM 2

/*Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"*/


function solution(value){
    let answer = value.toString();
    
    for(let i = answer.length; i < 5; i++){
      answer = "0" + answer;
    }
    
    return "Value is " + answer;
  }
  