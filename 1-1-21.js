/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */


function findOdd(arr) {
    let result = 0;
    let num = 0;
  
    //sort the array to easily see if there are duplicates
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      //if there are duplicates they will be right next to each other - check to see if equal
      if (arr[i] === arr[i+1]) {
        //iterate through if there is a duplicate
        num++;
      } else {
        num++;
        //if no duplicate in front, make sure it is unique (since its not checking behind in the array)
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }




/* Take a look at this pirate game.

Give Amaro an array to confirm his logic for the next time, when the number of pirates changes.

Keep in mind that each time the pirates find a treasure, the amount of gold equals to the number of pirates * 20.

Example:

If number of pirates is 2, including Amaro, then array = [40, 0], So he can keep all of the gold to himself.

If number of pirates is 3, including Amaro, then array = [59, 0, 1], and 59 gold is his for the taking.

If number of pirates is 4, including Amaro, then array = [79, 0, 1, 0], and 79 gold is his to take.

If number of pirates is 5, including Amaro, then array = [98, 0, 1, 0, 1], and 98 gold is his for the taking. */

function amaroPlan(pirateNum){
    //create the array
    let finalArr = [];
    //establish the initial value of gold
    finalArr[0] = pirateNum * 20;
    //create loop to push 0 or 1 to the array accordingly
    for(let i = 1; i < pirateNum; i++){
      if(i % 2 !== 0){
        finalArr.push(0);
      } else if (i % 2 === 0) {
        finalArr.push(1);
        //deduct one from the initial value each time
        finalArr[0] -= 1;
      }
    }

    return finalArr;
}


/* You have to write a function which returns unique numbers array. 
You don't need to validate input arg arr. Retain the original order of the input. */

function uniqueNumbers(numbersArray) {
    //create the new array
    let finalArr = [];
    //iterate through the array
    for(let i = 0; i < numbersArray.length; i++){
        //check if the iteration already exists in the finalArr. If not, push the value into finalArr
      if(!finalArr.includes(numbersArray[i])){
        finalArr.push(numbersArray[i]);
      }
    }
  return finalArr;
}