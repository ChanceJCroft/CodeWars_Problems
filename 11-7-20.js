/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.*/

function solve(s){
  //set two variables to keep track of how many upper/lower case there are
  let lowerCaseTotal = 0;
  let upperCaseTotal = 0;
  //iterate through the array to see if it is upper or lower case
    for(let i = 0; i < s.length; i++){
      if(s[i] == s[i].toUpperCase()){
        upperCaseTotal++
      }
      else{
        lowerCaseTotal++
      };
      
    };
  //check to see if the uppercase or lowercase total is higher and return it
  if(lowerCaseTotal >= upperCaseTotal){
    return s.toLowerCase();
  }
  else{
    return s.toUpperCase();
  }
}