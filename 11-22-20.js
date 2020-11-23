/* Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. 
He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. 
Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.
*/



function findScreenHeight(width, ratio) {
    const ratioSplit = ratio.split(":");
    const height = (width / ratioSplit[0]) * ratioSplit[1];
    const finalScreenRatio = `${width}x${height}`;
    return finalScreenRatio;
}



/*My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
#Example: If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket)
and returns the first n such that ceil(price of System B) < price of System A.
More examples:

movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/

function movie(card, ticket, perc) {
    let systemA = ticket;
    let systemB = card + ticket;
    let newPerc = perc;
    let numTicks = 0;
    do {
      numTicks++;
      systemA += ticket;
      systemB += ticket * newPerc;
      newPerc = newPerc * perc;
    }
    while(systemA <= Math.ceil(systemB));
  return numTicks;
};



/* Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

Good luck! */

function solve(a,b){
    let finalArray = [];
    let currentCount = 0;
  //go through b and compare each element in b to each element in a
    for(let i = 0; i < b.length; i++){
      currentCount = 0;
      for(let x = 0; x <= a.length; x++){
        if(b[i] === a[x]){
          currentCount++
        }
        if(x === a.length){
          finalArray.push(currentCount);
          currentCount = 0;
        }
      }
    }
  return finalArray;
}