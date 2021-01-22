/* In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck! */

function pairs(ar){
    //create variable to add consecutive counts to
   let conseCount = 0;
   
   //iterate through the array, checking if each pair is consecutive, if so, add to the count variable
   for(let i = 0; i < ar.length + 1; i+=2) {
     if(ar[i] && ar[i+1]) {
       let firstNum = Math.abs(ar[i]);
       let secondNum = Math.abs(ar[i + 1]);
       if(firstNum - secondNum === 1) {
           conseCount++;
       }
       else if(secondNum - firstNum === 1) {
           conseCount++;
       }
     }
     
   }
 
   return conseCount;
 }




 /* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */
function positiveSum(arr) {
    //check if the array has anything in it
    if(arr.length >= 1) {
      //filter out the negative numbers
      let positiveArr = arr.filter(num => num > 0);
      
      //if the new array has anything it it, add it together
      if(positiveArr.length > 0) {
        return positiveArr.reduce((a, b) => a+b);
      }  
    }
    //if nothing else, return 0
    return 0;
  }