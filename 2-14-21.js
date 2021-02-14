//**PROBLEM 1**//

/* This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29 */

function evaporator(content, evap_per_day, threshold){ 
    let days = 0;
    let percLost = evap_per_day / 100;
    let percent = 1 - percLost;
    for(let i = 100; i >= threshold; i *= percent) {
      days = days + 1;
    }
    
    return days;
  }



//**PROBLEM 2**//

/* Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18 */

function elevatorDistance(array) {
    //create a variable to keep track of total distance
    let distance = 0;
    
    //iterate through array, subtracting the two numbers and adding absolute value to distance
    for(let i = 0; i < array.length - 1; i++) {
      let tempDistance = Math.abs(array[i] - array[i+1]);
      distance += tempDistance;
    }
    
    //return
    return distance;
  }



  //**PROBLEM 3**//

  /* #Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8 */
function pipeFix(numbers){
    let numLength = numbers.length - 1;
    let max = numbers[numLength]
    let newArray = [];
    for(let i = numbers[0]; i <= max; i++) {
      newArray.push(i);
    }
    
    return newArray;
  }
