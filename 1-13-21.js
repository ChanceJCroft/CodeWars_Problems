/* In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true */



//Passed 5 out of 6 tests, but I really let this one get away from me. Rather than re-thinking it through I kept wanting to add more, which made it
//more cumbersome. Still, a good learning experience worth sharing.
function isAValidMessage(message){
    if(message === '') {
      return true;
    }
    //create arrays to add the numbers and strings into
    let numArray = [];
    let strArray = [];
    let newWord = '';
    let newNum = '';
    
    //split the string into an array for easy iteration
    let messageArray = message.split('');
    
    if(isNaN(messageArray[0])) {
      return false;
    }
    //iterate through the array and push the nums and strings to respective arrays
    for(let i = 0; i < messageArray.length; i++) {
      if(isNaN(messageArray[i]) == true) {
        newWord += messageArray[i];
        if(numArray.length !== 0){
          numArray.push(parseInt(newNum));
          newNum = '';
        }
      }
      else {
        newNum += messageArray[i];
        if(strArray.length !== 0) {
          strArray.push(newWord);
          newWord = ''; 
        }
      }
    }
   //checking to make sure the arrays have the same number of elements
    if(numArray.length !== strArray.length) {
      return false;
    }
    
    //checking to make sure the original array doesn't end with a number
    if(isNaN(messageArray[strArray.length]) || isNaN(messageArray[numArray.length])) {
      return false;
    }
    
    //check to make sure the number matches the lengths of the strings
    for(let i = 0; i < numArray.length; i++) {
      if(numArray[i] !== strArray[i].length) {
        return false;
      }
    }
    if(newNumArrayLength === newStrArrayLength) {
      return true;
    }
  
    
    
  }