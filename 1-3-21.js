/* Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962 */


//so this Kata didn't pass one of the 135 tests, but I wasn't able to receive any information about which inputs were failing, so I eventually threw in the towel.
function addArrays(array1, array2) {
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    //need to identify if it is a negative
    if(parseInt(array1[0]) < 0) {
      //if negative, turn into negative version of itself
      arrayToNumber1 = -Math.abs(arrayToNumber1);
    }
    if(parseInt(array2[0]) < 0) {
      arrayToNumber2 = -Math.abs(arrayToNumber2);
    }
    let finalNum = arrayToNumber1 + arrayToNumber2;
    let finalArray = finalNum.toString(10).split('').map(Number);
    if(isNaN(finalArray[0])) {
      finalArray[1] = -Math.abs(finalArray[1]);
      finalArray.shift();
    }
    
    return finalArray;
  }




/* You woke up from a massive headache and can't seem to find your car key. You find a note with a clue that says:

*"If you're reading this then I have left the state and am well on my way to freedom. Just to make things interesting, I have also provided something for you to track me with. Let the chase begin..."*

Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key. */

//a nice and clean kata, feel good about this one
function whoTookTheCarKey(message) {
    let output = message.map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    return output;
  }

/* Given a number, return the maximum value by rearranging its digits.

Examples:

(123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310

^Note the number may be given as a string */

//was able to cleanly refactor this one
const rotateToMax = n => {
    return parseInt((""+n).split("").sort(function(a,b) {return b-a}).join(''));
  }