/* You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y.

Example
For arr=[1, 1, 1, 2, 2, 3], the result should be 18

3 x 3 x 2 = 18

For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

200 x 200 x 100 = 4000000

Input/Output
[input] integer array arr

an array contains positive integers.

[output] an integer

The value of x * x * y */

function missingValues(arr) {
  
    let once = 1;
    let twice = 1;
    let counter = 0;
    //find the value that only appears once
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
          once = arr[i];
        }

    //find the value that appears twice
      for(let x = 1; x < arr.length; x++) {
          if(arr[i] === arr[x]) {
            counter++;
          } 
      }
      if(counter == 2) {
        twice = arr[i];
      } else {
        counter = 0;
      }
      
    } 
    
    
    //multiply and return
    return once * once * twice;
    
  }


  /* Story
You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

But at the end of the day you realise not everybody did the same amount of work.

To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

Kata Task
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

Example
For start = 125, and end = 132

The letterboxes are

125 = 1, 2, 5
126 = 1, 2, 6
127 = 1, 2, 7
128 = 1, 2, 8
129 = 1, 2, 9
130 = 1, 3, 0
131 = 1, 3, 1
132 = 1, 3, 2
The digit frequencies are:

0 is painted 1 time
1 is painted 9 times
2 is painted 6 times
etc...
and so the method would return [1,9,6,3,0,1,1,1,1,1] */
var paintLetterboxes = function(start, end) {
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    let num9 = 0;
    
    for(let i = start; i <= end; i++) {
        let newArr = i.toString().split('');
        for(let x = 0; x < newArr.length; x++) {
          switch(parseInt(newArr[x])) {
              case 0: 
              num0++;
              break;
              
              case 1:
              num1++;
              break;
              
              case 2: 
              num2++;
              break;
              
              case 3:
              num3++;
              break;
              
              case 4:
              num4++;
              break;
              
              case 5:
              num5++;
              break;
              
              case 6:
              num6++;
              break;
              
              case 7:
              num7++;
              break;
              
              case 8:
              num8++;
              break;
              
              case 9:
              num9++;
          }
        }
    }
    return [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9]
}

/*Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm (and vice versa) will add to the effect (really wave peak to trough but this will do). 
Find out how many changes in level the string has and if that figure is more than 20% of the string, return "Throw Up", if less, return "No Problem". */

function seaSick(x){
    let newArr = x.split('');
    let numOfSick = 0;
    let nextSt = newArr[1];
  
    for(let i = 0; i < newArr.length; i++) {
      nextSt = newArr[i + 1];
        if(newArr[i] === "~" && nextSt === "_") {
          numOfSick += 1;
          nextSt = "~";
        } else if(newArr[i] === "_" && nextSt === "~") {
          numOfSick += 1;
          nextSt = "_";
        }
    }
  
    if(numOfSick / x.length >= Math.abs(.2)) {
      return "Throw Up";
    } else {
      return "No Problem";
    }
}

/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

//Super easy
function hero(bullets, dragons){
    return bullets >= dragons * 2;
  }