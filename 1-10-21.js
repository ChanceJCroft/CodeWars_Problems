/* A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

Your task is to return an integer (0 or 1), whose the parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

Example:

  Parity: 'even'
  Bin: '0101010'
  Result: 1
Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits. */

//need to work on writing cleaner if/else statements - these are a bit lengthy for what si needed
function checkParity(parity, bin){
    //check for odd/even
    let isOdd = true;
    //count sum of bin to see if even/odd
    let counter = 0;
    //add int value to counter
    for(let i = 0; i < bin.length; i++){
      counter += parseInt(bin[i]);
    }
    //check to see if total is odd or even
    if(counter % 2 === 0) {
      isOdd = false;
    }
    
    //if statement to see what should be returned
    if(parity == 'even' && isOdd == true) {
      return 1;
    }
    else if(parity == 'odd' && isOdd == false) {
      return 1;
    }
    else {
      return 0;
    }
  }


/* Egg Talk.

Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

eg:

hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA */

function heggeleggleggo(word){
    //create variable to be returned
    let newString = '';
    //create array to check if a vowel or space
    let vowels = ['a', 'e', 'i', 'o', 'u', ' '];
    //iterate through each array to create the new word
    for(let i = 0; i < word.length; i++) {
      //create lower case version for testing
      let newWordI = word[i].toLowerCase();
      newString += word[i];
      //add egg if a consonant
      if(vowels.includes(newWordI) == false) {
        newString += 'egg';
      }
    }
    return newString;
  }