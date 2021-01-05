/* Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000] */

function createArrayOfTiers(num) {
    //create the array we will return
    let finalArray = [];
    //turn the number into a string as requested
    let numStr = num.toString();
    //instantiate an empty string which will be manipulated for the array
    let finalNum = '';
    //iterate through the array and continually add the next value to the string
    for(let i = 0; i < numStr.length; i++) {
      finalNum += numStr[i];
      finalArray.push(finalNum);
    }
    return finalArray;
}


