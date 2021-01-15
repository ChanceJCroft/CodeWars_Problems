/* In this kata, you have an integer array which was ordered by ascending except one number.

For Example: [1,2,3,4,17,5,6,7,8]
For Example: [19,27,33,34,112,578,116,170,800]
You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending. */

/* This is another Kata that was more difficult than anticipated, but got most test cases working
and learned that I need to look into "continue" statements further in JS */
function orderBreaker(input) {
    //create needed variables
    let checkNum = 0;
    
    if(input[0] > input[1]) {
      checkNum = input[0];
      return checkNum;
    }
    //Iterate through the array to make sure it isn't a breaker
    for(let i = 1; i < input.length - 1; i++) {
      if(input[i] >= input[i-1] && input[i] <= input[i+1]) {
        console.log("Not this one!");
      }
      else {
        //if it fits the criteria, check if the array sorts cleanly
        checkNum = input[i];
        let sortedArr = input.splice(checkNum, 1).sort();
        for(let i = 0; i < sortedArr.length; i++) {
          if(sortedArr[i + 1] && sortedArr[i] <= sortedArr[i + 1]) {
            continue;
          } else if(sortedArr[i - 1] && sortedArr[i] >= sortedArr[i - 1]) {
            continue;
          }
          else {
            return checkNum;
          }
        }
        return checkNum;
      }
  
    }
    
    //identify end of the array
    let maxLength = input.length - 1;
    
    
    //check if the last item is the breaker
    if(input[maxLength] < input[maxLength - 1]) {
        checkNum = input[maxLength];
        return checkNum;
    }
  }

  /* Here is another way I saw that is much smarter. Using an array as a variable to identify elements just ahead and behind of the current
  element in an array. */
  function orderBreaker(arr) {
    for(let i=0;i<arr.length;i++){
      let [a,v,b] = [arr[i-1],arr[i],arr[i+1]];
      if( a===undefined && v>b || b===undefined && a>v || a<=b && (a>v||v>b) )
        return v;
    }
    throw "No breaker (this is breaking the rules!)";
  }


/* Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
] */

  function sumOfMinimums(arr) {
    //create variable for total
    let total = 0;
    
    //loop through the array - spread other arrays and grab the minimum number
    for(let i = 0; i < arr.length; i++){
      total += Math.min(...arr[i]);
      }
    
    return total;
  }


  /* Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0. */
function maxMultiple(divisor, bound){
  for(let i = bound; i > 0; i--) {
    if(i % divisor === 0) {
      return i;
    }
  }
}