//Question 1
/* Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

//This was honestly a very easy, warm-up problem since I've been moving for a few days and haven't gotten to code.

function sum (numbers) {
    let finalAnswer = numbers[0] || 0;
    for(let i = 1; i < numbers.length; i++) {
      finalAnswer += numbers[i];
    }
    return finalAnswer;
};


//Question 2
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them) */

function solution(number){
    //create an array to add all divisible numbers to
    let totalArray = [];
    for(let i = 0; i < number; i++){
      //check to see if it is divisible by both (so it doesn't add twice)
      if(i % 3 == 0 && i % 5 == 0){
        totalArray.push(i);
      }
      //check to see if it is divisible by 3 but NOT 5
      if(i % 3 == 0 && i % 5 !== 0){
        totalArray.push(i);
      }
      //check to see if it is divisible by 5 but NOT 3
      if(i % 5 == 0 && i % 3 !== 0){
        totalArray.push(i);
      }
    }
    //create a totalSum variable to add to
    let totalSum = 0;
    //add everything from the totalArray to the totalSum
    for(let i = 0; i < totalArray.length; i++){
      totalSum += totalArray[i];
    }
    return totalSum;
  }


//Question 3  
/* Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats. */

function sumEvenNumbers(input) {
    let totalSum = 0;
    for(let i = 0; i < input.length; i++){
      if(input[i] % 2 === 0){
        totalSum += input[i];
      }
    }
    return totalSum;
}

//Question 4
/* Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover. */

//For some reason I was getting caught up on this one. No matter what I ended up with 1 glass of water.

function hydrate(s) {
    let newArray = s.split(' ');
    let cupsOfWater = 0;
    for(let i = 0; i < newArray.length; i++){
      if(typeof newArray[i] === 'number'){
        cupsOfWater += newArray[i];
      }
    }
    if(cupsOfWater = 1){
    return  "1 glass of water"
      }
    if(cupsOfWater > 1){
    return cupsOfWater + " glasses of water"
    }
  }

  //Below is how I went back through and made cleaned it up to work
  function hydrate(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i]) > 0) {
        answer += parseInt(s[i]);
      }
    }
    if(answer > 1){
      return answer + " glasses of water"
    }
    else if(answer = 1){
      return "1 glass of water"
    }
  }


//Question 5
/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), 
is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

//I really thought this one would be more difficult in practice than concept, but it was as easy as it sounded.
const quarterOf = (month) => {
    if(month >= 1 && month < 4){
      return 1
    }
    else if(month >= 4 && month < 7){
      return 2
    }
    else if(month >= 7 && month < 10){
      return 3
    }
    else {
      return 4
    }
  }