/* #Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-) */
function averages(numbers) {
    if(!numbers) {
      return [];
    }
    let newArr = [];
    for(let i = 0; i < numbers.length - 1; i++) {
        let x = numbers[i];
        let y = numbers[i+1];
          newArr.push((x+y) / 2);
      }
      return newArr;
  }

/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    
    return [...str].sort().join('');
  }


/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02. */
function nbYear(p0, percent, aug, p) {
    let counter = 0;
    let population = p0;
  
    do{
    population += ((population * (percent/100)) + aug);
    counter++;
    }  
    while(population < p);
  
    return counter;
}



/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
  let newArr = [];
  let zeroCounter = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroCounter += 1;
    } else {
      newArr.push(arr[i]);
    }
  }
  
  for(let i = 0; i < zeroCounter; i++) {
      newArr.push(0);
  }
  
  return newArr;
}

/* Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */

function alphabetWar(fight)
{
  let leftSide = 0;
  let rightSide = 0;
  const strArr = fight.split('');
  for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] == 'w') {
        leftSide += 4;
      }
      if(strArr[i] == 'p') {
        leftSide += 3;
      }
      if(strArr[i] == 'b') {
        leftSide += 2;
      }
      if(strArr[i] == 's') {
        leftSide += 1;
      }
    if(strArr[i] == 'm') {
        rightSide += 4;
      }
    if(strArr[i] == 'q') {
        rightSide += 3;
      }
    if(strArr[i] == 'd') {
        rightSide += 2;
      }
    if(strArr[i] == 'z') {
        rightSide += 1;
      }
  }
  
  if(leftSide > rightSide) {
    return "Left side wins!"
  } else if (rightSide > leftSide) {
    return "Right side wins!"
  } else {
    return "Let's fight again!";
  }
}