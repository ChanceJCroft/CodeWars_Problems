/* Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead */

// The classic FizzBuzz challenge!
function fizzbuzz(n)
{
  //create new array to push values to
  let newArray = [];
  //iterate through the array
  for(let i = 1; i < n + 1; i++) {
    //check if it is divisible by both 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      newArray.push('FizzBuzz');
    }
    //check if just divisible by 3
    else if(i % 3 === 0 && i % 5 !== 0) {
      newArray.push('Fizz');
    }
    //check if just divisible by 5
    else if(i % 5 === 0 && i % 3 !== 0) {
      newArray.push('Buzz');
    }
    //otherwise, push the number
    else {
      newArray.push(i);
    }
  }
  
  return newArray;
}


/* Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */

//Super Easy
function problem(x){
    if(typeof x == 'string') {
      return "Error";
    }
    else {
      return (x * 50) + 6;
    }
  }


