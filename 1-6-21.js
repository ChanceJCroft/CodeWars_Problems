/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */


//Chance Croft - Obviously this can be done by simply returning a string with all of the numbers array parameters individually listed, but I wanted to get a bit more creative.
function createPhoneNumber(numbers){
    //create variables to group the numbers for easier returns
    let areaCode = '(';
    //add in the space between areaCode and primaryDigits
    let primaryDigits = ' ';
    //add in the hyphen between primary and secondaryDigits
    let secondaryDigits = '-';
    //group the numbers for ease of returns
    for(let i = 0; i < numbers.length; i++) {
      if(i < 3) {
        areaCode += numbers[i].toString();
      }
      else if(i >= 3 && i < 6) {
        primaryDigits += numbers[i].toString();
      }
      else {
        secondaryDigits += numbers[i].toString();
      }
    }
    return areaCode + ')' + primaryDigits + secondaryDigits;  
  }


  /* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

function getEvenNumbers(numbersArray){
    let newArray = numbersArray.filter(function(number) {
    return number % 2 == 0;
        });
    return newArray;
  }

/* Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, 
starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
If both numbers are the same, then the range is empty and the result should be 0. */

function cubeSum(n, m){
    //setup variables to easily identify the difference and smaller number
    let sumDiff = 0;
    let smallerNum = 0;
      if(n > m) {
        sumDiff = n - m;
        smallerNum = m;
      }
      else if(m > n) {
        sumDiff = m - n;
        smallerNum = n;
      } else {
        return 0;
      }
    //create finalSum variable to add to
    let finalSum = 0;
    
    //for loop to iterate through and add the cubed value to the variable
    //start at 1 (not inclusive of lower value), end at sumDiff+1 (include upper value)
    for(let i = 1 ; i < sumDiff + 1; i++) {
      finalSum += Math.pow((smallerNum + i), 3)    
    }
    
    //return the variable
    return finalSum;
  }

/*In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.

Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".

Note: We are not considering leap years. */

//Chance Croft - Not sure why, but I thought this one would be a bit trickier going into it. Apparently not.
function fourSeasons(d) {
    if(d > 365) {
      return 'The year flew by!';
    }
    else if(d < 80 || d > 354) {
      return 'Winter Season'
    }
    else if (d >= 80 && d < 172) {
      return 'Spring Season'
    }
    else if (d >= 172 && d < 264) {
      return 'Summer Season'
    }
    else {
      return 'Autumn Season'
    }
  }