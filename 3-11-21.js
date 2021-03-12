/* Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative. */
function reverseBits (n) {
    let binaryN = n.toString(2);
    let reverseN = binaryN.split("").reverse().join("");
    let finalNum = parseInt(reverseN, 2);
    
    return finalNum;
  }




/* Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. */

function solution(input, markers) {
    let inputArr = input.split(" ");
    for(let i = 0; i < markers.length; i++) {
      for(let x = 0; x < inputArr.length; x++) {
        if(inputArr[x].includes(markers[i])) {
          inputArr.slice(x);
        }
      }
    }
    
    return inputArr.join(" ");
  };


/* Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take 
a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector. */

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}


/* A simple kata, my first.
simply tranform an array into a string, like so: */

function transform(array) {
	return array.join("");
}