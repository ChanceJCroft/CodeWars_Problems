/*Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1*/

const divisions = (n, divisor) => {
    let counter = 0;
    while(Math.floor(n/divisor >= 1)) {
      n = Math.floor(n / divisor);
      counter++;
    }
    return counter;
  };


/* The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly. */

var replaceDots = function(str) {
    return str.replace(/[.]/g , '-');
   }



/* You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array. */
var validWord = function(dictionary, word) {
    //iterate through array to see if word contains item in array
    for(let i = 0; i < dictionary.length; i++){
      if(word.includes(dictionary[i])){
        word = word.slice(i, (i + dictionary[i].length));
      }
    }
    
    if(word.length == 0) {
      return true;
    }
    else{
     return false;
    }
  };